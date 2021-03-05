<template>
  <section class="section">
    <img :src="hero" :class="styles.heroP">
    <div :class="styles.wrapper">
      <div :class="styles.skinModule" :style="{ backgroundImage: 'url(' + skinBg + ')' }">
        <div :class="styles.skinTitle">
          Username
        </div>
        <div :class="styles.skin">
          <img :src="skinPreview" alt="">
        </div>
        <div :class="styles.skinCommands">
          <button>Установить скин</button>
          <button>Установить плащ</button>
        </div>
      </div>
      <div :class="styles.statsModule" :style="{ backgroundImage: 'url(' + statsBg + ')' }">
        <div :class="styles.topPanel">
          <div :class="styles.balance">
            <img :src="diamond" alt="">
            <span>Баланс: 100</span>
          </div>
          <div :class="styles.addBalance">
            <span>Пополнить</span>
            <img :src="plus" alt="" width="15" height="15">
          </div>
        </div>
        <div :class="styles.profileDetails">
          <div :class="styles.detail">
            <span>Email:</span>
            <span>example@test.com</span>
          </div>
          <div :class="styles.detail">
            <span>Пароль</span>
            <button @click="showModal">Сменить</button>
          </div>
        </div>
      </div>
    </div>
    <div :class="styles.triangles">
      <img :src="triangleOne" alt="">
      <img :src="triangleTwo" alt="">
      <img :src="triangleThree" :class="styles.triangleThree" alt="">
    </div>
    <div class="fluid" :class="styles.primaryBg"
         :style="{ backgroundImage: 'url(' + bg + ')' }">
    </div>
  </section>
  <reset ref="resetRef"/>
</template>

<script>
import hero from 'Assets/news/news-bg.png'
import bg from 'Assets/main-bg.png'
import skinBg from 'Assets/profile/skin-bg.png'
import statsBg from 'Assets/profile/stats-bg.png'
import skinPreview from 'Assets/profile/skin-preview.png'
import diamond from 'Assets/profile/diamond.png'
import plus from 'Assets/profile/plus.svg'
import triangleOne from 'Assets/profile/triangle1.png'
import triangleTwo from 'Assets/profile/triangle2.png'
import triangleThree from 'Assets/profile/triangle3.png'
import Reset from '@/components/Auth/Reset'
import styles from 'Sass/profile.module.sass'
import { ref } from 'vue'

export default {
  name: 'Profile',
  components: {
    Reset
  },
  setup () {
    const resetRef = ref(null)
    const showModal = () => {
      resetRef.value.show()
    }
    return {
      showModal,
      resetRef,
      hero,
      bg,
      skinBg,
      statsBg,
      skinPreview,
      diamond,
      plus,
      triangleOne,
      triangleTwo,
      triangleThree,
      styles
    }
  }
}
</script>
