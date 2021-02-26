<template>
  <div class="row align-items-center py-2" :class="styles.cardWrapper">
    <img class="col-auto" :src="card.img"/>
    <div class="col" :class="styles.price">{{ card.title }}</div>
    <div class="col-3 col-lg-1 text-center" :class="styles.price">{{ card.amount }}</div>
    <div class="col-2 col-lg-1 text-center" :class="styles.price">
      <img :src="diamond" alt="">
      {{ card.price }}
    </div>
    <div class="col-12 col-lg-2 d-flex justify-content-center my-2 my-lg-0">
      <button :class="styles.purchase">Купить</button>
    </div>
  </div>
</template>

<script>
import styles from 'Sass/item-card.module.sass'
import diamond from 'Assets/shop/item-price.png'
export default {
  name: 'ItemCard',
  props: {
    card: {}
  },
  data () {
    return {
      styles: styles,
      diamond
    }
  }
}
</script>
