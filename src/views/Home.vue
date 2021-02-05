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
  <div class="fluid" :class="styles.newsBg"
       :style="{ backgroundImage: 'url(' + bg + ')' }">
  </div>
  <section>
    <NewsPreview/>
    <Social/>
  </section>
</template>

<script>
import styles from 'Sass/home.module.sass'
import hero from '@/assets/hero-background.png'
import logo from 'Assets/logo.png'
import pickaxe1 from 'Icons/pickaxe1.svg'
import pickaxe2 from 'Icons/pickaxe2.svg'
import bg from 'Assets/main-bg.png'
import Slider from '@/components/Slider/Slider'
import NewsPreview from '@/components/News/NewsPreview'
import Social from '@/components/Social/Social'

export default {
  name: 'Home',
  components: {
    Social,
    Slider,
    NewsPreview
  },
  setup () {
    return {
      styles,
      hero,
      logo,
      pickaxe1,
      pickaxe2,
      bg
    }
  }
}
</script>
