<template>
  <section class="">
    <img :src="hero" alt="minecraft background" :class="styles.hero">
    <div class="container" :class="styles.wrapper">
      <div class="row justify-content-center">
        <div class="col-auto">
          <img :src="logo" alt="">
        </div>
      </div>
    </div>
    <Welcome :text="text">
      <img :src="arrow" alt="">
    </Welcome>
  </section>
  <div class="fluid" :class="styles.primaryBg"
       :style="{ backgroundImage: 'url(' + bg + ')' }">
  </div>
  <section>
    <WelcomeCard :card="cards.card1"/>
    <WelcomeCard :card="cards.card2" :direction="false"/>
    <WelcomeCard :card="cards.card3" />
  </section>
</template>

<script>
import styles from 'Sass/start.module.sass'
import hero from 'Assets/hero-background.png'
import logo from 'Assets/logo.png'
import arrow from 'Assets/welcome/arrow.png'
import bg from 'Assets/main-bg.png'
import step1 from 'Assets/start/step1.png'
import step2 from 'Assets/start/step2.png'
import step3 from 'Assets/start/step3.png'
import number1 from 'Assets/start/number-1.png'
import number2 from 'Assets/start/number-2.png'
import number3 from 'Assets/start/number-3.png'
import Welcome from '@/components/Welcome/Welcome'
import WelcomeCard from '@/components/Welcome/WelcomeCard'
import { reactive } from 'vue'

export default {
  name: 'Start',
  components: {
    Welcome,
    WelcomeCard
  },

  setup () {
    const text = reactive({
      heading: 'Добро Пожаловать На проект FOXCRAFT',
      subheading: 'Мы рады видесь Вас здесь!',
      additionalData: 'Приглашаем вас присоеденится к уже зарегистрированным игрокам\n' +
        'для проведения совместных приключений в мире Minecraft'
    })
    const cards = reactive({
      card1: {
        image: step1,
        number: number1,
        heading: 'Зарегиструйтесь на нашем проекте',
        subheading: 'Зарегестрируйтесь и подтвердите вашу почту, это займет всего несколько минут',
        actionText: 'Регистрация',
        action: () => {
        }
      },
      card2: {
        image: step2,
        number: number2,
        heading: 'Скачайте лаунчер',
        subheading: 'Скачайте игровой лаунчер и приступайте к игре',
        actionText: 'Скачать',
        action: () => {
        }
      },
      card3: {
        image: step3,
        number: number3,
        heading: 'Выбирайте сервер',
        subheading: 'И добро пожаловать в увлекательный игровой мир!',
        actionText: 'Регистрация',
        action: () => {
        }
      }
    })
    return {
      styles,
      logo,
      hero,
      text,
      arrow,
      cards,
      bg
    }
  }
}
</script>
