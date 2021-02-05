<template>
  <div class="container-fluid" :class="styles.wrapper">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-auto" :class="styles.heading">
          Новости проекта
        </div>
      </div>
      <div class="row mb-5" :class="styles.wrapperInner">
        <NewsCard v-for="item in news" :news="item"/>
      </div>
      <div class="row justify-content-center">
        <button class="col-auto d-flex justify-content-center align-items-center" :class="styles.proceed">
          <span>Смотреть все</span>
          <img :src="arrowLeft" alt="arrow left" height="20" width="11">
        </button>
      </div>
      <div :class="styles.rectsTop">
        <img class="col-auto" :src="topLeft" alt="">
        <img class="col-auto" :src="topRight" alt="">
      </div>
      <div :class="styles.rectsBot">
        <img class="col-auto" :src="botLeft" alt="">
        <img class="col-auto" :src="botRight" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import styles from 'Sass/news-preview.module.sass'
import { mapState } from 'vuex'
import NewsCard from '@/components/News/NewsCard'
import topLeft from 'Assets/news-bg/top-left.png'
import topRight from 'Assets/news-bg/top-right.png'
import botLeft from 'Assets/news-bg/bot-left.png'
import botRight from 'Assets/news-bg/bot-right.png'
import arrowLeft from 'Assets/icons/arrow-left.svg'

export default {
  name: 'NewsPreview',
  components: { NewsCard },
  data () {
    return {
      styles: styles,
      topLeft,
      topRight,
      botLeft,
      botRight,
      arrowLeft
    }
  },
  computed: {
    ...mapState({
      news: state => state.news.news
    })
  }
}
</script>
