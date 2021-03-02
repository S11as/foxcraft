<template>
  <section class="section">
    <img :src="hero" :class="styles.heroP">
    <div class="fluid" :class="styles.primaryBg"
         :style="{ backgroundImage: 'url(' + bg + ')' }">
    </div>
    <div :class="styles.wrapper">
      <div :class="styles.skinModule" :style="{ backgroundImage: 'url(' + skinBg + ')' }">
        some content
      </div>
    </div>
  </section>
</template>

<script>
import hero from 'Assets/news/news-bg.png'
import bg from 'Assets/main-bg.png'
import skinBg from 'Assets/profile/skin-bg.png'
import styles from 'Sass/profile.module.sass'
export default {
  name: 'Profile',
  setup () {
    return {
      hero,
      bg,
      skinBg,
      styles
    }
  }
}
</script>
