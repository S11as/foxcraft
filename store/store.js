import { createStore } from 'vuex'
import news from './modules/news.module'
import shop from './modules/shop.module'

const store = createStore({
  modules: {
    news,
    shop
  }
})

export default store
