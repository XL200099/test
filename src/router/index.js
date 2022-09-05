import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 空间商城
  {
    path: '/spacemall',
    name: '/spacemall',
    component: () => import('../views/SpaceMall.vue'),
  },
  // 我的订单
  {
    path: '/orderform',
    name: 'orderform',
    component: () => import('../views/OrderForm.vue'),
  },
  // 自动跳转到指定的地址
  {
    path: '/',
    redirect:'/mine'
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/Mine.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
