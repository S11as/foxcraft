import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Start from '@/views/Start'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/start',
    name: 'Start',
    component: Start
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
