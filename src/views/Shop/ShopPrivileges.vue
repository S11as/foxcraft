<template>
  <section class="">
    <div class="container" :class="styles.wrapper">
      <div class="row justify-content-between">
        <shop-card v-for="item in renderCards" :card="item"/>
      </div>
    </div>
  </section>
  <section class="my-5">
    <div class="container" :class="styles.advantages">
      <div class="row justify-content-between" :class="styles.privilegeHeader">
        <div class="col-5 text-center" :class="styles.privilege">
          Возможность
        </div>
        <div class="col-auto text-center" :class="styles.privilege" v-for="item in server.privileges"
             :ref="bindPrivilegeRef(item.id)">[{{ item.title }}]
        </div>
      </div>
      <div class="row justify-content-between" :class="styles.line" v-for="renderTrait in renderTable">
        <div class="col-5 text-center py-4">
          {{ renderTrait.text }}
        </div>
        <div class="col-auto text-center py-4" :class="[definePrivilegeBg(privilege.tier)]"
             :style="{width: definePrivilegeWidth(privilege.id) +'px'}"
             v-for="privilege in server.privileges">
          <span v-if="traitPertainsToPrivilege(renderTrait.id, privilege.id)">{{ definePrivilegeVal(renderTrait.id, privilege.id) }}</span>
          <img v-else :src="cross"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import styles from 'Sass/shop-privileges.module.sass'
import ShopCard from '@/views/Shop/ShopCard'
import cross from 'Assets/shop/cross.png'

export default {
  name: 'ShopPrivileges',
  components: {
    ShopCard
  },
  computed: {
    server () {
      return this.$store.getters.serverById(this.$route.params.id)
    },
    renderCards () {
      return this.server.privileges.filter(item => item.acquirable)
    },
    renderTable () {
      return this.$store.getters.getFullTable(this.$route.params.id)
    }
  },
  data () {
    return {
      styles: styles,
      privileges: {},
      cross
    }
  },
  methods: {
    traitPertainsToPrivilege (traitId, privilegeId) {
      return this.$store.getters.traitPertainsToPrivilege(traitId, privilegeId, this.$route.params.id)
    },
    bindPrivilegeRef (privilegeId) {
      return (r) => {
        this.privileges[privilegeId] = r
      }
    },
    definePrivilegeWidth (privilegeId) {
      for (const key in this.privileges) {
        if (key === privilegeId) {
          if (this.privileges[key]) { return this.privileges[key].clientWidth }
        }
      }
    },
    definePrivilegeVal (traitId, privilegeId) {
      return this.$store.getters.privilegeTraitVal(traitId, privilegeId, this.$route.params.id)
    },
    definePrivilegeBg (privilegeTier) {
      switch (privilegeTier) {
        case 1: {
          return ''
        }
        case 2: {
          return styles.tierTwo
        }
        case 3: {
          return styles.tierThree
        }
        case 4: {
          return styles.tierFour
        }
        case 5: {
          return styles.tierFive
        }
      }
    }
  }
}
</script>
