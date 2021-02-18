import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Start from '@/views/Start'
import Download from '@/views/Download'
import News from '@/views/News'
import NewsPiece from '@/views/NewsPiece'

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
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/news/:id',
    name: 'NewsPiece',
    component: NewsPiece
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
