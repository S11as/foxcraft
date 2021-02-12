<template>
  <modal id="login" ref="modal">
    <img :src="modalBg" alt="">
    <div class="container" :class="styles.wrapper">
      <div class="row justify-content-center my-3">
        <div class="col-auto" :class="styles.heading">
          Войти в аккаунт
        </div>
      </div>
      <div class="row justify-content-center my-4">
        <div class="col-auto">
          <label :class="styles.input">
            <input type="text" maxlength="54" placeholder=" ">
            <span>Введите логин или адрес эл. почты</span>
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
      <div class="row justify-content-center mt-4 mb-5">
        <div class="col-auto">
          <button :class="styles.login">
            Войти
          </button>
        </div>
      </div>
      <div class="row justify-content-center my-2">
        <div class="col-auto" :class="styles.additional">
          <span>В первый раз здесь?</span>
          <button @click="this.$emit('call-modal', 'register')">Зарегистрироваться</button>
        </div>
      </div>
      <div class="row justify-content-center my-2">
        <div class="col-auto" :class="styles.additional">
          <span>Забыли пароль?</span>
          <button>Восстановить</button>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import styles from 'Sass/auth.module.sass'
import Modal from '@/components/Auth/Modal'
import modalBg from 'Assets/modal-bg.png'
import useForm from '@/components/Auth/use/useForm'
import { required, minLength } from '@/components/Auth/validators'

export default {
  name: 'Login',
  components: {
    Modal
  },
  emits: [
    'call-modal'
  ],
  setup () {
    const form = useForm({
      email: {
        value: '',
        validators: { required }
      },
      password: {
        value: '',
        validators: {
          required,
          minLength: minLength(8)
        }
      }
    })
    return {
      styles,
      modalBg,
      form
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
