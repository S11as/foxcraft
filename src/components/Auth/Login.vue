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
          <label :class="[(form.username.valid || !form.username.touched) ? [styles.input] : [styles.inputError]]">
            <input type="text" maxlength="54" placeholder=" " v-model="form.username.value" @blur="form.username.blur">
            <span>Введите логин или адрес эл. почты</span>
          </label>
        </div>
        <div :class="styles.errors" v-if="!(form.username.valid || !form.username.touched)">
          <img :src="modalError" alt="">
          <small v-if="form.username.errors.required">Поле обязательно</small>
        </div>
      </div>
      <div class="row justify-content-center my-4">
        <div class="col-auto">
          <label :class="[(form.password.valid || !form.password.touched) ? [styles.input] : [styles.inputError]]">
            <input type="password" maxlength="54" placeholder=" " v-model="form.password.value" @blur="form.password.blur">
            <span>Введите пароль</span>
          </label>
        </div>
        <div :class="styles.errors" v-if="!(form.password.valid || !form.password.touched)">
          <img :src="modalError" alt="">
          <small v-if="form.password.errors.minLength">Минимальная длина 8 символов</small>
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
          <button @click="this.$emit('call-modal', 'restore')">Восстановить</button>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import styles from 'Sass/auth.module.sass'
import Modal from '@/components/Auth/Modal'
import modalBg from 'Assets/modal-bg.png'
import modalError from 'Assets/modal-error.svg'
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
      username: {
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
      modalError,
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
