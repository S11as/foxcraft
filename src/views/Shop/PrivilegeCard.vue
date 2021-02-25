<template>
  <div :class="styles.wrapper">
    <div :class="styles.wrapperInner">
      <img :src="card.img" :class="styles.img" alt="">
      <span :class="styles.title">[{{card.title}}]</span>
    </div>
    <button :class="styles.pricing">
      <img :src="diamond" alt="">
      {{card.price}}
    </button>
  </div>
</template>

<script>
import styles from 'Sass/shop-card.module.sass'
import cardImg from 'Assets/shop/card.png'
import diamond from 'Assets/shop/diamond.png'

export default {
  name: 'ShopCard',
  props: {
    card: {}
  },
  data () {
    return {
      styles: styles,
      cardImg,
      diamond
    }
  }
}
</script>
