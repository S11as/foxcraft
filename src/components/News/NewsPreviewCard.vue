<template>
  <div class="col-12 col-md-6 col-xl-4 d-flex flex-column align-items-center justify-content-start" :class="styles.bg"
       :style="{ backgroundImage: 'url(' + bg + ')' }">
    <div :class="styles.title">
      {{ news.title }}
    </div>
    <img :src="news.previewImg" alt="" :class="styles.preview">
    <div class="row justify-content-center">
      <div class="col" :class="styles.innerText">
        {{ news.text }}
      </div>
    </div>
    <div class="row justify-content-center">
      <button class="col-auto" :class="styles.proceed">
        Подробнее
      </button>
    </div>
  </div>
</template>

<script>
import styles from 'Sass/news-preview-card.module.sass'
import bg from 'Assets/news-preview-card.png'

export default {
  name: 'NewsCard',
  props: {
    news: {}
  },
  data () {
    return {
      bg,
      styles
    }
  }
}
</script>
