<template>
  <section>
    <img :src="hero" alt="minecraft background" :class="styles.hero">
    <div class="container" :class="styles.wrapper">
      <div class="row justify-content-between">
        <div class="col-auto">
          <div class="row">
            <img :src="logo" alt="foxcraft logo" :class="styles.logo">
          </div>
          <div class="row justify-content-center">
            <button class="col-auto" :class="styles.heroButton">
              <img :src="pickaxe1">
              <span :class="styles.heroButtonText">Начать игру</span>
              <img :src="pickaxe2">
            </button>
          </div>
        </div>
        <div class="col-6">
          <Slider/>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import styles from 'Sass/home.module.sass'
import hero from '@/assets/hero-background.png'
import logo from 'Assets/logo.png'
import pickaxe1 from 'Icons/pickaxe1.svg'
import pickaxe2 from 'Icons/pickaxe2.svg'
import Slider from '@/components/Slider/Slider'

export default {
  name: 'Home',
  components: {
    Slider
  },
  setup () {
    return {
      styles,
      hero,
      logo,
      pickaxe1,
      pickaxe2
    }
  }
}
</script>
