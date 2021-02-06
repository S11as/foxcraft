<template>
  <div class="container-fluid" :style="{ backgroundImage: 'url(' + bg + ')' }"
       :class="styles.wrapper">
    <div class="container">
      <div class="row">
        <div class="col" :class="[{'order-2':!direction}]">
          <div class="row mt-5">
            <div class="col-auto">
              <img :src="card.number" alt="">
            </div>
            <div class="col mt-2">
              <div class="row mb-4">
                <div class="col d-flex justify-content-center justify-content-lg-start align-items-center" :class="styles.heading">
                  <span>{{ card.heading }}</span>
                </div>
              </div>
              <div class="row">
                <div class="col text-center text-lg-start" :class="styles.subHeading">
                  {{ card.subheading }}
                </div>
              </div>
              <div class="row justify-content-center">
                <button class="col-auto" :class="styles.link" @click="card.action">
                  {{card.actionText}}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-auto" :class="[{'order-1':!direction}]">
          <img :src="card.image" :class="[direction?[styles.image]:[styles.imageReversed]]" alt="">
        </div>
      </div>
    </div>
    <div :class="[direction?[styles.diamonds]:[styles.diamondsReversed]]">
      <img :src="diamondLeft" :class="styles.diamondLeft" alt="">
      <img :src="diamondRight" :class="styles.diamondRight" alt="">
    </div>
  </div>
</template>

<script>
import styles from 'Sass/welcome-card.module.sass'
import bg from 'Assets/start/bg.png'
import diamondLeft from 'Assets/start/diamond-left.png'
import diamondRight from 'Assets/start/diamond-right.png'
export default {
  name: 'WelcomeCard',
  props: {
    card: {},
    direction: {
      type: Boolean,
      default: true
    }
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
