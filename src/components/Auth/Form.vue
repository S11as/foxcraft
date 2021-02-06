<template>
  <div class="">
    {{form}}
    <br>
    <br>
    <br>
    <input type="text" placeholder="email" v-model="form.email.value">
    <input type="password" placeholder="password" v-model="form.password.value">
  </div>
</template>

<script>
// import styles from 'Sass/Form.module.sass'

import useForm from '@/components/Auth/use/useForm'
import { required, minLength } from '@/components/Auth/validators'

export default {
  name: 'Form',
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
    console.log(form)
    return { form }
  }
}
</script>
