<template>
  <modal id="register" ref="modal">
    <img :src="modalBg" alt="">
    <div class="container" :class="styles.wrapper">
      <div class="row justify-content-center my-3">
        <div class="col-auto" :class="styles.heading">
          Регистрация
        </div>
      </div>
      <div class="row justify-content-center my-4">
        <div class="col-auto">
          <label :class="styles.input">
            <input type="text" maxlength="54" placeholder=" ">
            <span>Введите логин</span>
          </label>
        </div>
      </div>
      <div class="row justify-content-center my-4">
        <div class="col-auto">
          <label :class="styles.input">
            <input type="text" maxlength="54" placeholder=" ">
            <span>Введите пароль</span>
          </label>
        </div>
      </div>
      <div class="row justify-content-center my-4">
        <div class="col-auto">
          <label :class="styles.input">
            <input type="text" maxlength="54" placeholder=" ">
            <span>Подтвердите пароль</span>
          </label>
        </div>
      </div>
      <div class="row justify-content-center my-4">
        <div class="col-auto">
          <label :class="styles.input">
            <input type="text" maxlength="54" placeholder=" ">
            <span>Введите электронную почту</span>
          </label>
        </div>
      </div>
      <div class="row justify-content-center mb-3">
        <div class="col-auto">
          <label :class="styles.checkbox">
            <input type="checkbox">
            <span :class="styles.checkmark">
              <img :src="modalRect" alt="">
            </span>
            <span :class="styles.content">Я ознакомился и согласен с <a href="google.com">правилами</a></span>
          </label>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-auto">
          <label :class="styles.checkbox">
            <input type="checkbox">
            <span :class="styles.checkmark">
              <img :src="modalRect" alt="">
            </span>
            <span :class="styles.content">Я согласен на хранение и обработку
            персональных данных</span>
          </label>
        </div>
      </div>

      <div class="row justify-content-center mt-4 mb-5">
        <div class="col-auto">
          <button :class="styles.login">
            Зарегистрироваться
          </button>
        </div>
      </div>

      <div class="row justify-content-center my-2">
        <div class="col-auto" :class="styles.additional">
          <span>Уже с нами?</span>
          <button @click="this.$emit('call-modal', 'login')">Войти</button>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import styles from 'Sass/auth.module.sass'
import modalBg from 'Assets/modal-bg.png'
import Modal from './Modal'
import modalRect from 'Assets/modal-rect.png'

export default {
  name: 'Register',
  components: {
    Modal
  },
  emits: [
    'call-modal'
  ],
  data () {
    return {
      styles: styles,
      modalBg,
      modalRect
    }
  },
  methods: {
    show () {
      this.$refs.modal.show()
    },
    hide () {
      this.$refs.modal.hide()
    }
  }
}
</script>
