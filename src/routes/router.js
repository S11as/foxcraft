import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Start from '@/views/Start'
import Download from '@/views/Download'

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
  },
  {
    path: '/download',
    name: 'Download',
    component: Download
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
