<template>
  <header class="container-fluid d-flex align-items-center"
          :class="[[styles.wrapper], {[styles.wrapperActive]: yellowEnabled}]">
    <div class="container" :class="styles.wrapperInner">
      <div class="row">
        <div class="col-auto" >
          <img :src="logo" alt="" :class="[[styles.transition], {[styles.invisible]:!yellowEnabled}]">
        </div>
        <div class="col-8 d-flex">
          <HeaderLink to="/">Главная</HeaderLink>
          <HeaderLink to="/news">Новости</HeaderLink>
          <HeaderLink to="/rules">Правила</HeaderLink>
          <HeaderLink to="/support">Поддержка</HeaderLink>
          <HeaderLink to="/donations">Магазин</HeaderLink>
        </div>
        <div class="col d-flex">
          <HeaderLink to="/">Вход</HeaderLink>
          <HeaderLink to="/">
            Скачать
            <img :src="download" class="px-2"/>
          </HeaderLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import styles from 'Sass/header.module.sass'
import download from 'Icons/download.svg'
import HeaderLink from '@/components/Header/HeaderLink'
import logo from 'Assets/header-logo.png'

export default {
  name: 'Header',
  components: {
    HeaderLink
  },
  data () {
    return {
      styles: styles,
      yellowEnabled: false,
      download,
      logo
    }
  },
  mounted () {
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        this.castNavToYellow()
      } else {
        this.castNavToTransparent()
      }
    }
  },
  methods: {
    castNavToTransparent () {
      this.yellowEnabled = false
    },
    castNavToYellow () {
      this.yellowEnabled = true
    }
  }
}
</script>
