import { createStore } from 'vuex'
import news from './modules/news.module'

const store = createStore({
  modules: {
    news
  }
})

export default store
