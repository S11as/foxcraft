<template>
  <section class="container-fluid" :class='styles.wrapper' :style="{ backgroundImage: 'url(' + bg + ')' }" >
    <div class="container">
      <div class="row">
        <div class="col order-2 order-lg-1">
          <div class="row justify-content-center mt-5 mb-4">
            <h4 class="col-auto" :class="styles.title">
              {{news.title}}
            </h4>
          </div>
          <div class="row justify-content-center">
            <p class="col"  :class="styles.text">
              {{news.preview}}
            </p>
          </div>
          <div class="row justify-content-center mt-4">
            <router-link exact :to="`/news/${news.id}`" class="col-auto" :class="styles.proceed">
              Подробнее
            </router-link>
          </div>
        </div>
        <div class="col-12 col-lg-7 order-1 order-lg-2">
          <img :src="news.img" :class="styles.image" alt="">
        </div>
      </div>
      <div :class="styles.diamonds">
        <img :src="diamondLeft" :class="styles.diamondLeft" alt="">
        <img :src="diamondRight" :class="styles.diamondRight" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import styles from 'Sass/news-card.module.sass'
import bg from 'Assets/news-card.png'
import diamondLeft from 'Assets/diamonds/diamond-left.png'
import diamondRight from 'Assets/diamonds/diamond-right.png'
export default {
  name: 'NewsCard',
  props: {
    news: {}
  },
  data () {
    return {
      styles: styles,
      bg,
      diamondLeft,
      diamondRight
    }
  }
}
</script>
