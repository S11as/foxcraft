<template>
  <img :src="hero" alt="" :class="styles.hero">
  <section>
    <div class="container" :class="styles.wrapper">
      <div class="row justify-content-center">
        <h2 class="col-auto" :class="styles.header">
          Новости проекта
        </h2>
      </div>
    </div>
  </section>
  <NewsCard v-for="item in news" :key="item.id" :news="item"/>
  <div class="fluid" :class="styles.primaryBg"
       :style="{ backgroundImage: 'url(' + bg + ')' }"/>
</template>

<script>
import styles from 'Sass/news.module.sass'
import { mapState } from 'vuex'
import hero from '@/assets/news/news-bg.png'
import bg from 'Assets/main-bg.png'
import NewsCard from '@/components/News/NewsCard'
export default {
  name: 'News',
  components: {
    NewsCard
  },
  computed: {
    ...mapState({
      news: state => state.news.news
    })
  },
  data () {
    return {
      styles: styles,
      hero,
      bg
    }
  }
}
</script>
