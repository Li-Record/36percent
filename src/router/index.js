import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AdminLogin from '../page/AdminLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'AdminLogin',
    component: AdminLogin
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
