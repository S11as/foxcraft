<template>
  <div class="container-fluid" :class="styles.wrapper" :style="{ backgroundImage: 'url(' + bg + ')' }">
    <div class="container">
      <div class="row" :class="styles.wrapperInner">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-auto" :class="styles.heading">
                {{text.heading}}
              </div>
            </div>
            <div class="row justify-content-center my-3">
              <div class="col-auto" :class="styles.subHeading">
                {{text.subheading}}
              </div>
            </div>
            <div class="row justify-content-center mt-5">
              <div class="col-auto" :class="styles.subHeading">
                {{text.additionalData}}
              </div>
            </div>
            <div class="row justify-content-center mt-5">
              <div class="col-auto">
                <slot></slot>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div :class="styles.triangle">
      <img :src="triangleLeft" height="363" alt="">
      <img :src="triangleRight" :class="styles.triangleRight" alt="">
    </div>
  </div>
</template>

<script>
import styles from 'Sass/welcome.module.sass'
import bg from 'Assets/welcome/bg.png'
import triangleLeft from 'Assets/welcome/triangle-left.png'
import triangleRight from 'Assets/welcome/triangle-right.png'
export default {
  name: 'Welcome',
  props: {
    text: {}
  },
  setup () {
    return {
      styles,
      bg,
      triangleLeft,
      triangleRight
    }
  }
}
</script>
