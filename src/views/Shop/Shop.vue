<template>
  <img :src="hero" alt="" :class="styles.hero">
  <section class="container" :class="styles.logo">
    <div class="row justify-content-center">
      <div class="col-auto">
        <img :src="logo" alt="">
      </div>
    </div>
  </section>
  <welcome :text="text">
    <img :src="arrow" alt="">
  </welcome>
  <div class="fluid" :class="styles.primaryBg"
       :style="{ backgroundImage: 'url(' + bg + ')' }">
  </div>
  <nav class="container" :class="styles.serverNav">
    <div class="row justify-content-center">
      <router-link class="col-auto" v-for="item in servers" :to="`/shop/${item.id}`"
                   :class="[styles.server, {[styles.serverActive]: linkActive(item.id)}]">
        {{ item.title }}
      </router-link>
    </div>
  </nav>
  <nav class="container" :class="styles.serverNav">
    <div class="row justify-content-center">
      <router-link class="col-auto" exact :exact-active-class="styles.subNavLinkActive"
                   :class='styles.subNavLink' :to="`/shop/${server.id}/privileges`">
        Привелегии
      </router-link>
      <router-link class="col-auto" exact :exact-active-class="styles.subNavLinkActive"
                   :class='styles.subNavLink' :to="`/shop/${server.id}/blocks`">
        Блоки
      </router-link>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
import styles from 'Sass/shop.module.sass'
import hero from '@/assets/news/news-bg.png'
import logo from 'Assets/logo.png'
import Welcome from '@/components/Welcome/Welcome'
import arrow from 'Assets/welcome/arrow.png'
import bg from 'Assets/main-bg.png'
import { mapState } from 'vuex'

export default {
  name: 'Shop',
  components: {
    Welcome
  },
  computed: {
    server () {
      return this.$store.getters.serverById(this.$route.params.id)
    },
    ...mapState({
      servers: state => state.shop.servers
    })
  },
  data () {
    return {
      styles: styles,
      hero,
      logo,
      arrow,
      bg,
      text: {
        heading: 'Привелегии проекта FOXCRAFT',
        subheading: 'Нравится играть вместе с нами? Поддержите проект чтобы помочь нам\n' +
          'в развитии игрового процесса.',
        additionalData: 'За пожертвование Вы получаете кристаллы которые можно обменять' +
          ' на привилегии'
      }
    }
  },
  mounted () {
    console.log(this.server, this.servers)
  },
  methods: {
    linkActive (id) {
      return this.$route.params.id === id
    }
  }
}
</script>
