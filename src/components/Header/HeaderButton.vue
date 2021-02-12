<template>
  <button @click="this.$emit('click')" :class="styles.link">
    <slot></slot>
  </button>
</template>

<script>
import styles from 'Sass/header-link.module.sass'

export default {
  name: 'HeaderButton',
  emits: [
    'click'
  ],
  setup () {
    return {
      styles
    }
  }
}
</script>
