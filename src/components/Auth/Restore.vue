<template>
  <modal id="restore" ref="modal">
    <img :src="modalBg" alt="">
    <div class="container" :class="styles.wrapper">
      <div class="row justify-content-center my-3">
        <div class="col-auto" :class="styles.heading">
          Восстановление пароля
        </div>
      </div>
      <div class="row justify-content-center my-5">
        <div class="col-auto">
          <label :class="styles.input">
            <input type="text" maxlength="54" placeholder=" ">
            <span>Введите логин или адрес эл. почты</span>
          </label>
        </div>
      </div>
      <div class="row justify-content-center mt-4 mb-5">
        <div class="col-auto">
          <button :class="styles.login">
            Войти
          </button>
        </div>
      </div>
      <div class="row justify-content-center my-2">
        <div class="col-auto" :class="styles.additional">
          <span>Вам будет выслана ссылка для восстановления пароля</span>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import styles from 'Sass/auth.module.sass'

import Modal from '@/components/Auth/Modal'
import modalBg from 'Assets/modal-bg.png'

export default {
  name: 'Restore',
  components: {
    Modal
  },
  data () {
    return {
      styles: styles,
      modalBg
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
