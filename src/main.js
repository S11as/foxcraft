import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes/router'
import config from './config.js'
import store from '../store/store'
import setUpApi from './setUpApi'

import 'reset-css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

store.commit('onConfig', config)

setUpApi(store, config)

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
