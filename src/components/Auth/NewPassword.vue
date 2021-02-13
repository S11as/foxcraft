<template>
  <modal id="newPassword" ref="modal">
    <img :src="modalBg" alt="">
    <div class="container" :class="styles.wrapper">
      <div class="row justify-content-center my-3">
        <div class="col-auto" :class="styles.heading">
          Восстановление пароля
        </div>
      </div>
      <div class="row justify-content-center my-4">
        <div class="col-auto">
          <label :class="[(form.password.valid || !form.password.touched) ? [styles.input] : [styles.inputError]]">
            <input type="password" maxlength="54" placeholder=" " v-model="form.password.value"
                   @blur="form.password.blur">
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
          <label
            :class="[(form.repeatPassword.valid || !form.repeatPassword.touched) ? [styles.input] : [styles.inputError]]">
            <input type="password" maxlength="54" placeholder=" " v-model="form.repeatPassword.value"
                   @blur="form.repeatPassword.blur">
            <span>Подтвердите пароль</span>
          </label>
        </div>
        <div :class="styles.errors" v-if="!(form.repeatPassword.valid || !form.repeatPassword.touched)">
          <img :src="modalError" alt="">
          <small v-if="form.repeatPassword.errors.required">Поле обязательно</small>
          <small v-else-if="form.repeatPassword.errors.sameAs">Пароли не совпадают</small>
        </div>
      </div>
      <div class="row justify-content-center mt-4 mb-5">
        <div class="col-auto">
          <button :class="styles.login">
            Изменить пароль
          </button>
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
import { minLength, required, sameAs } from '@/components/Auth/validators'
import modalRect from 'Assets/modal-rect.png'
import modalError from 'Assets/modal-error.svg'

export default {
  name: 'NewPassword',
  components: {
    Modal
  },
  setup () {
    const form = useForm({
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
