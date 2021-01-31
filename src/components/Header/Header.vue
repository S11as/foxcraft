<template>
  <header class="container-fluid d-flex align-self-center align-items-center" :class="styles.wrapper">
    <div class="container" :class="styles.wrapperInner">
      <div class="row">
        <div class="col-9 d-flex">
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

export default {
  name: 'Header',
  components: {
    HeaderLink
  },
  data () {
    return {
      styles: styles,
      download
    }
  }
}
</script>
