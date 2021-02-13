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
          <label :class="[(form.username.valid || !form.username.touched) ? [styles.input] : [styles.inputError]]">
            <input type="text" maxlength="54" placeholder=" " v-model="form.username.value" @blur="form.username.blur">
            <span>Введите логин</span>
          </label>
        </div>
        <div :class="styles.errors" v-if="!(form.username.valid || !form.username.touched)">
          <img :src="modalError" alt="">
          <small v-if="form.username.errors.required">Поле обязательно</small>
        </div>
      </div>
      <div class="row justify-content-center my-4">
        <div class="col-auto">
          <label :class="[(form.email.valid || !form.email.touched) ? [styles.input] : [styles.inputError]]">
            <input type="text" maxlength="54" placeholder=" " v-model="form.email.value" @blur="form.email.blur">
            <span>Введите адрес эл. почты</span>
          </label>
        </div>
        <div :class="styles.errors" v-if="!(form.email.valid || !form.email.touched)">
          <img :src="modalError" alt="">
          <small v-if="form.email.errors.required">Поле обязательно</small>
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
          <small v-if="form.password.errors.required">Поле обязательно</small>
          <small v-else-if="form.password.errors.minLength">Минимальная длина пароля 8 символов</small>
        </div>
      </div>
      <div class="row justify-content-center my-4">
        <div class="col-auto">
          <label :class="[(form.repeatPassword.valid || !form.repeatPassword.touched) ? [styles.input] : [styles.inputError]]">
            <input type="password" maxlength="54" placeholder=" " v-model="form.repeatPassword.value" @blur="form.repeatPassword.blur">
            <span>Подтвердите пароль</span>
          </label>
        </div>
        <div :class="styles.errors" v-if="!(form.repeatPassword.valid || !form.repeatPassword.touched)">
          <img :src="modalError" alt="">
          <small v-if="form.repeatPassword.errors.required">Поле обязательно</small>
          <small v-else-if="form.repeatPassword.errors.sameAs">Пароли не совпадают</small>
        </div>
      </div>
      <div class="row justify-content-center mb-3">
        <div class="col-auto">
          <label :class="styles.checkbox">
            <input type="checkbox" v-model="form.rules.value">
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
            <input type="checkbox" v-model="form.personalData.value">
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
import modalRect from 'Assets/modal-rect.png'
import modalError from 'Assets/modal-error.svg'
import Modal from './Modal'
import useForm from '@/components/Auth/use/useForm'
import { minLength, required, sameAs } from '@/components/Auth/validators'

export default {
  name: 'Register',
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
      },
      repeatPassword: {
        value: '',
        validators: {
          required,
          minLength: minLength(8),
          sameAs: sameAs('password')
        }
      },
      rules: {
        value: false,
        validators: {
          required
        }
      },
      personalData: {
        value: false,
        validators: {
          required
        }
      }
    })
    return {
      styles,
      modalBg,
      modalRect,
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
