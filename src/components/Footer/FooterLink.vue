<template>
  <router-link :to="to" exact :class="styles.link">
    <slot></slot>
  </router-link>
</template>

<script>
import styles from 'Sass/footer-link.module.sass'

export default {
  name: 'FooterLink',
  setup (props) {
    return {
      styles,
      to: props.to
    }
  }
}
</script>
