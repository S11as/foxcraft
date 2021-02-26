<template>
  <section class="container" :class="styles.wrapper">
    <div class="row justify-content-end" :class="styles.pricingCaption">
      <div class="col-3 col-lg-1 text-center">Количество</div>
      <div class="col-2 col-lg-1 text-center">Цена</div>
      <div class="col-2 d-lg-block d-none"></div>
    </div>
    <item-card v-for="item in cards" :card="item"/>
    <div class="row justify-content-center mt-5">
      <div class="col-auto d-flex">
        <div class="" :class="[styles.page,styles.pageActive]"
             :ref="createPageRef(1)" @click="changePage(1)">1</div>
        <div :class="styles.separator" v-if="leftSeparator">...</div>
        <div v-for="page in pages" :class="[styles.page]" @click="changePage(page)" :ref="createPageRef(page)">
          {{ page }}
        </div>
        <div :class="styles.separator" v-if="rightSeparator">...</div>
        <div class="" :class="[styles.page]" :ref="createPageRef(totalPages)" @click="changePage(totalPages)">
          {{ totalPages }}
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import styles from 'Sass/shop-blocks.module.sass'
import ItemCard from '@/views/Shop/ItemCard'
import { mapState } from 'vuex'
import { CHANGE_PAGINATION_PAGE } from '../../../store/types'

export default {
  name: 'ShopBlocks',
  components: {
    ItemCard
  },
  computed: {
    ...mapState({
      cards: state => state.shop.items.data,
      currentPage: state => state.shop.items.currentPage,
      totalPages: state => state.shop.items.totalPages
    }),
    statelessPagination: function () {
      return this.totalPages < 10
    },
    leftPaginationState: function () {
      return this.currentPage < 5
    },
    rightPaginationState: function () {
      return this.currentPage > this.totalPages - 4
    },
    centerPaginationState: function () {
      return !(this.leftPaginationState || this.rightPaginationState)
    },
    leftSeparator: function () {
      return (this.centerPaginationState || this.rightPaginationState) &&
        !this.statelessPagination
    },
    rightSeparator: function () {
      return (this.centerPaginationState || this.leftPaginationState) &&
        !this.statelessPagination
    }
  },
  data () {
    return {
      styles: styles,
      pages: [2, 3, 4, 5, 6],
      pageRefs: {}
    }
  },
  mounted () {
    if (this.statelessPagination) {
      this.pages = this.range(1, this.totalPages - 2, 1)
    }
  },
  methods: {
    range (_from, to, number) {
      const arr = []
      for (let i = number + _from; i <= number + to; i++) {
        arr.push(i)
      }
      return arr
    },
    changePage (toPage) {
      // TODO call api to load data

      // CHANGE PAGINATION STATE IF NEEDED
      this.$store.commit(CHANGE_PAGINATION_PAGE, toPage)
      if (!this.statelessPagination) {
        if (this.centerPaginationState) {
          this.pages = this.range(-2, 2, toPage)
        } else if (this.leftPaginationState) {
          switch (toPage) {
            case 4: {
              this.pages = this.range(-2, 2, toPage)
              break
            }
            case 3: {
              this.pages = this.range(-1, 3, toPage)
              break
            }
            case 2: {
              this.pages = this.range(0, 4, toPage)
              break
            }
            case 1: {
              this.pages = this.range(1, 5, toPage)
            }
          }
        } else if (this.rightPaginationState) {
          switch (toPage) {
            case this.totalPages - 3: {
              this.pages = this.range(-2, 2, toPage)
              break
            }
            case this.totalPages - 2: {
              this.pages = this.range(-3, 1, toPage)
              break
            }
            case this.totalPages - 1: {
              this.pages = this.range(-4, 0, toPage)
              break
            }
            case this.totalPages: {
              this.pages = this.range(-5, -1, toPage)
            }
          }
        }
      }
      setTimeout(() => {
        for (const key in this.pageRefs) {
          if (this.pageRefs[key]) {
            if (this.pageRefs[key].classList.contains(this.styles.pageActive)) {
              this.pageRefs[key].classList.remove(this.styles.pageActive)
              break
            }
          }
        }
        for (const key in this.pageRefs) {
          if (parseInt(key) === toPage) {
            this.pageRefs[key].classList.add(this.styles.pageActive)
            break
          }
        }
      })
    },
    createPageRef (page) {
      return (ref) => {
        this.pageRefs[page] = ref
      }
    }
  }
}
</script>
