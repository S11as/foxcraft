import { createStore } from 'vuex'
import news from './modules/news.module'
import shop from './modules/shop.module'
import cabinet from './modules/cabinet.module'

const store = createStore({
  modules: {
    news,
    shop,
    cabinet
  }
})

export default store
