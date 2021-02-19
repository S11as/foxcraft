<template>
  <img :src="hero" alt="" :class="styles.hero">

  <div class="fluid" :class="styles.primaryBg"
       :style="{ backgroundImage: 'url(' + bg + ')' }">
  </div>
  <section :class='styles.heading'>
    <div class="container">
      <div class="row justify-content-center">
        <h2 class="col-auto" :class="styles.header">
          Новости проекта
        </h2>
      </div>
    </div>
  </section>
  <section class="container-fluid" :class='styles.wrapper'>
    <div :class="styles.wrapperInner" :style="{ backgroundImage: 'url(' + sectionBg + ')' }">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-auto">
            <img :src="newsPiece.img" :class="styles.image">
          </div>
        </div>
        <div class="row justify-content-center">
          <h3 class="col-auto" :class="styles.title">{{newsPiece.title}}</h3>
        </div>
        <div class="row">
          <article :class="styles.article">{{newsPiece.text}}</article>
        </div>
        <div class="row justify-content-center my-5">
          <router-link class="col-auto" to="/news" :class="styles.back">
            Назад
          </router-link>
        </div>
      </div>
    </div>
    <div :class="[styles.diamondsTop]">
      <img :src="diamondRight"  alt="">
      <img :src="diamondRight"  alt="">
    </div>
    <div :class="[styles.diamondsBot]">
      <img :src="diamondLeft"  alt="">
      <img :src="diamondLeft"  alt="">
    </div>
  </section>
</template>

<script>
import styles from 'Sass/news-piece.module.sass'
import hero from '@/assets/news/news-bg.png'
import bg from 'Assets/main-bg.png'
import sectionBg from 'Assets/news/news-piece-bg.png'
import diamondLeft from 'Assets/diamonds/diamond-left.png'
import diamondRight from 'Assets/diamonds/diamond-right.png'

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
      sectionBg,
      diamondLeft,
      diamondRight
    }
  },
  mounted () {
    console.log(this.newsPiece)
  }
}
</script>
