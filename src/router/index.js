import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/views/Top'
import Login from '@/views/Login'
import Memo from '@/views/Memo'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component: Top
  },
  {
    path:'/memo/:id',
    component: Memo,
    name: 'memo'
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
