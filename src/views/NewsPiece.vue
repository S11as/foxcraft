<template>
  <img :src="hero" alt="" :class="styles.hero">

  <div class="fluid" :class="styles.primaryBg"
       :style="{ backgroundImage: 'url(' + bg + ')' }">
  </div>
  <section class="container-fluid" :class='styles.wrapper'>
    <div :class="styles.wrapperInner" :style="{ backgroundImage: 'url(' + sectionBg + ')' }">
      <div class="container">
        <div class="row">
          <div class="col-auto">
            <!--            <img :src="news.img" alt="">-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import styles from 'Sass/news-piece.module.sass'
import hero from '@/assets/news/news-bg.png'
import bg from 'Assets/main-bg.png'
import sectionBg from 'Assets/news/news-piece-bg.png'

export default {
  name: 'NewsPiece',
  props: {
    news: {}
  },
  computed: {
    newsPiece: function () {
      return this.$store.getters.newsById(this.$route.params.id)
    }
  },
  data () {
    return {
      hero,
      styles,
      bg,
      sectionBg
    }
  },
  mounted () {
    console.log(this.newsPiece)
  }
}
</script>
