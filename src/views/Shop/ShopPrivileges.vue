<template>
  <section class="">
    <div class="container" :class="styles.wrapper">
      <div class="row justify-content-between">
        <shop-card v-for="item in renderCards" :card="item"/>
      </div>
    </div>
  </section>
  <section class="my-4">
    <div class="container" :class="styles.advantages">
      <div class="row justify-content-between">
        <div class="col-5 text-center">
          Возможность
        </div>
        <div class="col-auto" v-for="item in server.privileges">{{item.title}}</div>
      </div>
      <div class="row" v-for="">
        <div class="col-5 text-center">
          Возможность
        </div>
        <div class="col-auto" v-for="item in server.privileges">{{item.title}}</div>
      </div>
    </div>
  </section>
</template>

<script>
import styles from 'Sass/shop-privileges.module.sass'
import ShopCard from '@/views/Shop/ShopCard'

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
    }
  },
  data () {
    return {
      styles: styles
    }
  }
}
</script>
