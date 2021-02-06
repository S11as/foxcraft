<template>
  <div :class="styles.wrapper">
    <swiper
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      :autoplay="true"
      :class="styles.heroMargin"
    >
      <swiper-slide>
        <img :src="slide1" alt="">
      </swiper-slide>
      <swiper-slide>
        <img :src="slide1" alt="">
      </swiper-slide>
      <swiper-slide>
        <img :src="slide1" alt="">
      </swiper-slide>
      <swiper-slide>
        <img :src="slide1" alt="">
      </swiper-slide>
    </swiper>
    <img :src="trying" alt="" :class="styles.sliderBg">
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Pagination, Autoplay } from 'swiper'

import styles from 'Sass/slider.module.sass'
import 'swiper/swiper.min.css'
import 'swiper/components/autoplay'
import 'swiper/components/pagination/pagination.min.css'

import slide1 from 'Assets/slider/slide1.png'
import trying from 'Assets/try.png'

SwiperCore.use([Pagination, Autoplay])

export default {
  name: 'Slider',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      slider: null,
      slideCount: 3,
      styles,
      slide1,
      trying
    }
  },
  mounted () {
    let currentSlide = 1
    let slideDirection = true
    setInterval(() => {
      try {
        if (this.slider) {
          if (slideDirection) {
            this.slider.slideNext(1000)
            currentSlide++
            if (currentSlide === this.slideCount) slideDirection = false
          } else {
            this.slider.slidePrev(1000)
            currentSlide--
            if (currentSlide === 1) slideDirection = true
          }
        }
      } catch (e) {}
    }, 3500)
  },
  methods: {
    onSwiper (swiper) {
      this.slider = swiper
    }
  }
}
</script>
