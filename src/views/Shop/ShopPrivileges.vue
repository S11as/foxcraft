<template>
  <section class="">
    <div class="container" :class="styles.wrapper">
      <div class="row justify-content-center justify-content-lg-between">
        <privilege-card v-for="item in renderCards" :card="item"/>
      </div>
    </div>
  </section>
  <section class="my-5">
    <div class="container" :class="styles.advantages">
      <div class="row justify-content-between" :class="styles.privilegeHeader">
        <div class="col-2 col-md-5  text-center overflow-hidden" :class="[styles.privilege, styles.privilegeCaption]">
          Возможность
        </div>
        <div class="col-auto text-center" :class="styles.privilege" v-for="item in server.privileges"
             :ref="bindPrivilegeRef(item.id)">[{{ item.title }}]
        </div>
      </div>
      <div class="row justify-content-between" v-for="renderTrait in renderTable">
        <div class="col-2 col-md-5  text-center py-4" :class="styles.trait">
          {{ renderTrait.text }}
        </div>
        <div class="col-auto text-center py-4" :class="[definePrivilegeBg(privilege.tier)]"
             v-for="privilege in server.privileges" :ref="bindTraitRef(privilege.id)">
          <span v-if="traitPertainsToPrivilege(renderTrait.id, privilege.id)">{{
              definePrivilegeVal(renderTrait.id, privilege.id)
            }}</span>
          <img v-else :src="cross"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import styles from 'Sass/shop-privileges.module.sass'
import PrivilegeCard from '@/views/Shop/PrivilegeCard'
import cross from 'Assets/shop/cross.png'

export default {
  name: 'ShopPrivileges',
  components: {
    PrivilegeCard
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
      traits: [],
      cross
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
      this.setTraitsWidth()
    })
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.onResize)
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
    bindTraitRef (privilegeId) {
      return (r) => {
        this.traits.push({
          ref: r,
          privilegeId: privilegeId
        })
      }
    },
    onResize () {
      this.setTraitsWidth()
    },
    setTraitsWidth () {
      for (const item of this.traits) {
        const id = item.privilegeId
        for (const key in this.privileges) {
          if (key === id) {
            if (this.privileges[key]) {
              item.ref.style.width = this.privileges[key].clientWidth + 'px'
            }
          }
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
