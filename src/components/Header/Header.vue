<template>
  <header class="container-fluid d-flex flex-column align-items-center"
          :class="[[styles.wrapper], {[styles.wrapperActive]: yellowEnabled, [styles.wrapperWide]:!small,
          [styles.wrapperActiveWide]:yellowEnabled && !small}]">
    <div class="container-fluid" :class="[{'d-none':!small}]">
      <div class="row justify-content-between">
        <div class="col-auto d-flex align-items-center">
          <img :src="logo" alt="" :class="[[styles.transition], {[styles.invisible]:!yellowEnabled}]">
        </div>
        <div class="col-auto py-3 d-flex justify-content-end">
          <div :class="styles.burger" @click="burgerHandle">
            <span :class="styles.burgerLine"></span>
            <span :class="styles.burgerLine"></span>
            <span :class="styles.burgerLine"></span>
          </div>
        </div>
      </div>

    </div>
    <div class="container" id="menu" :class="[[styles.wrapperInner],{[styles.heightHidden]:small}]">
      <div class="row">
        <div class="col-auto">
          <img :src="logo" alt="" :class="[[styles.transition], {[styles.invisible]:!yellowEnabled, 'd-none':small}]">
        </div>
        <div class="col-8 d-flex" :class="[{'flex-column': small, 'col-12': small}]">
          <HeaderLink to="/">Главная</HeaderLink>
          <HeaderLink to="/news">Новости</HeaderLink>
          <HeaderLink to="/rules">Правила</HeaderLink>
          <HeaderLink to="/support">Поддержка</HeaderLink>
          <HeaderLink to="/donations">Магазин</HeaderLink>
        </div>
        <div class="col d-flex" :class="[{'flex-column': small, 'col-12': small}]">
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
import anime from 'animejs'

export default {
  name: 'Header',
  components: {
    HeaderLink
  },
  computed: {
    small: function () {
      return this.windowSize < 1200
    }
  },
  data () {
    return {
      styles: styles,
      yellowEnabled: false,
      burgerShown: false,
      windowSize: window.innerWidth,
      download,
      logo
    }
  },
  mounted () {
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        this.castNavToYellow()
      } else {
        if (!(this.small && this.burgerShown)) {
          this.castNavToTransparent()
        }
      }
    }
    window.onresize = () => {
      this.windowSize = window.innerWidth
    }
  },
  methods: {
    castNavToTransparent () {
      this.yellowEnabled = false
    },
    castNavToYellow () {
      this.yellowEnabled = true
    },
    hideMenu () {
      const menu = document.querySelector('#menu')
      anime({
        targets: menu,
        height: '0px',
        paddingBottom: '0px',
        easing: 'easeInOutSine'
      }).finished.then(() => {
        if (window.pageYOffset === 0) {
          this.castNavToTransparent()
        }
      })
    },
    showMenu () {
      const menu = document.querySelector('#menu')
      const neededHeight = menu.scrollHeight + 10
      if (window.pageYOffset === 0) {
        this.castNavToYellow()
      }
      anime({
        targets: menu,
        height: neededHeight + 'px',
        paddingBottom: '10px',
        easing: 'easeInOutSine'
      }).play()
    },
    burgerHandle () {
      if (this.burgerShown) {
        this.hideMenu()
      } else {
        this.showMenu()
      }
      this.burgerShown = !this.burgerShown
    }
  }
}
</script>
