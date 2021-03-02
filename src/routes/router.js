import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Start from '@/views/Start'
import Download from '@/views/Download'
import News from '@/views/News/News'
import NewsPiece from '@/views/News/NewsPiece'
import Shop from '@/views/Shop/Shop'
import ShopPrivileges from '@/views/Shop/ShopPrivileges'
import ShopBlocks from '@/views/Shop/ShopBlocks'
import Profile from '@/views/Profile'

import store from '../../store/store'

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
  },
  {
    path: '/shop/:id',
    name: 'ShopPage',
    component: Shop,
    children: [
      {
        path: '',
        redirect: to => {
          return `/shop/${to.params.id}/privileges`
        }
      },
      {
        path: 'privileges',
        component: ShopPrivileges
      },
      {
        path: 'blocks',
        component: ShopBlocks
      }
    ]
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    redirect: () => {
      return `/shop/${store.getters.redirectServer.id}/privileges`
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
