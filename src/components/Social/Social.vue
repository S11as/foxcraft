<template>
    <div :class="styles.wrapper" :style="{ backgroundImage: 'url(' + bg + ')' }">
      <div class="container py-5">
          <div class="row" :class="styles.wrapperInner">
            <div class="col-xxl-4 col-12 text-center text-xxl-start" :class="styles.questions">У вас есть вопросы?</div>
            <div class="col-xxl-4 col-md-6 col-12 d-flex align-items-center justify-content-center" :class="styles.ask">
              Задайте нам их тут
              <img :src="chevron" alt="" :class="styles.chevron">
            </div>
            <div class="col-xxl-4  col-md-6  col-12 d-flex align-items-center justify-content-center">
              <a href="" :class="styles.socialIcon">
                <img :src="telegram" alt="">
              </a>
              <a href="" :class="styles.socialIcon">
                <img :src="vk" alt="">
              </a>
              <a href="" :class="styles.socialIcon" class="mt-2">
                <img :src="discord" alt="">
              </a>
            </div>
          </div>
        <div :class="styles.triangle">
          <img :src="triangleLeft" alt="">
          <img :src="triangleRight" alt="">
        </div>
      </div>
    </div>
</template>

<script>
import styles from 'Sass/social.module.sass'
import bg from 'Assets/social/bg.png'
import chevron from 'Assets/icons/chevron-left.svg'
import telegram from 'Assets/social/icons/telegram.svg'
import vk from 'Assets/social/icons/vk.svg'
import discord from 'Assets/social/icons/discord.svg'
import triangleLeft from 'Assets/social/triangle-left.png'
import triangleRight from 'Assets/social/triangle-right.png'
export default {
  name: 'Social',
  data () {
    return {
      styles: styles,
      bg,
      chevron,
      telegram,
      vk,
      discord,
      triangleLeft,
      triangleRight
    }
  }
}
</script>
