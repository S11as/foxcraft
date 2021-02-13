<template>
  <section>
    <img :src="hero" alt="minecraft background" :class="styles.hero">
    <div class="container" :class="styles.wrapper">
      <div class="row justify-content-center">
        <div class="col-auto">
          <img :src="logo" alt="">
        </div>
      </div>
    </div>
    <welcome :text='text'>
      <button :class="styles.download">
        Скачать
      </button>
    </welcome>
    <div class="fluid" :class="styles.primaryBg"
         :style="{ backgroundImage: 'url(' + bg + ')' }">
    </div>
  </section>
</template>

<script>
import styles from 'Sass/download.module.sass'
import Welcome from '@/components/Welcome/Welcome'
import hero from 'Assets/hero-background.png'
import logo from 'Assets/logo.png'
import bg from 'Assets/main-bg.png'

export default {
  name: 'Download',
  components: {
    Welcome
  },
  data () {
    return {
      text: {
        heading: 'Добро Пожаловать На проект FOXCRAFT',
        subheading: 'Мы рады видесь Вас здесь!',
        additionalData: 'Скачайте лаунчер по ссылке ниже и присоеденитесь к уже зарегистрированным игрокам\n' +
          'для проведения совместных приключений в мире Minecraft'
      },
      hero,
      styles,
      logo,
      bg
    }
  }
}
</script>
