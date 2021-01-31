<template>
  <section>
    <img :src="hero" alt="minecraft background" :class="hero">
  </section>
</template>

<script>
import styles from 'Sass/home.module.sass'
import hero from '@/assets/hero-background.png'

export default {
  name: 'Home',
  setup () {
    return {
      styles,
      hero
    }
  }
}
</script>
