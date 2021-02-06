<template>
  <footer class="position-relative">
    <div class="pt-5 container-fluid" :class="styles.wrapper">
      <div class="container" :class="styles.wrapperInner">
        <div class="row justify-content-between" :class="styles.footerNav">
          <div class="col container">
            <div class="row">
              <div class="col-12 col-md-5 col-lg-3 my-5 my-md-0">
                <div class="row" :class="styles.footerTitle">
                  Навигация
                </div>
                <div class="row mt-2">
                  <FooterLink to="/go">Главная</FooterLink>
                </div>
                <div class="row mt-2">
                  <FooterLink to="/go">Новости</FooterLink>
                </div>
                <div class="row mt-2">
                  <FooterLink to="/go">Правила</FooterLink>
                </div>
                <div class="row mt-2">
                  <FooterLink to="/go">Скачать лаунчер</FooterLink>
                </div>
                <div class="row mt-2">
                  <FooterLink to="/go">Поддержка</FooterLink>
                </div>
              </div>
              <div class="col-12 col-md-5 col-lg-3 mb-5 my-md-0">
                <div class="row" :class="styles.footerTitle">
                  Авторизация
                </div>
                <div class="row mt-2">
                  <FooterLink to="/go">Вход</FooterLink>
                </div>
                <div class="row mt-2">
                  <FooterLink to="/go">Регистрация</FooterLink>
                </div>
              </div>
              <div class="col-12 col-md-5 col-lg-3 mb-5 mb-md-3 mt-md-3 my-lg-0">
                <div class="row" :class="styles.footerTitle">
                  Соц. Сети
                </div>
                <div class="row mt-2">
                  <div class="col-auto px-0">
                    <a href="">
                      <img :src="telegram" alt="" width="36" height="36">
                    </a>
                  </div>
                  <div class="col-auto px-2">
                    <a href="">
                      <img :src="vk" alt="" width="38" height="38">
                    </a>
                  </div>
                  <div class="col-auto px-0" :class="styles.discord">
                    <a href="" >
                      <img :src="discord" alt="" width="45" height="45">
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-auto p-0">
            <img :src="logo" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col" :class="styles.line">
          </div>
        </div>
        <div class="row justify-content-center py-4">
          <div class="col-auto text-center" :class="styles.copy">&copy; 2001-{{ new Date().getFullYear() }} Foxcraft. Все права
            защищены
          </div>
        </div>
      </div>
    </div>
    <img :src="circle" alt="" :class="styles.circle">
  </footer>

</template>

<script>
import styles from 'Sass/footer.module.sass'
import logo from 'Assets/footer/logo-small.png'
import FooterLink from '@/components/Footer/FooterLink'
import telegram from 'Assets/footer/telegram.svg'
import vk from 'Assets/footer/vk.svg'
import discord from 'Assets/footer/discord.svg'
import circle from 'Assets/footer/circle.png'
export default {
  name: 'Footer',
  components: {
    FooterLink
  },
  data () {
    return {
      styles: styles,
      logo,
      telegram,
      vk,
      discord,
      circle
    }
  }
}
</script>
