import { getUserInfo } from '@/utils/auth'
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
Vue.use(Router)

export const route = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard')
      }
      // {
      //   path: 'test',
      //   name: 'test',
      //   component: () => import('@/views/test')
      // }
    ]
  },

  {
    path: '/404',
    name: 'test',
    component: () => import('@/views/404')
  },
  {
    path: '*',
    redirect: '/404'
  }
]
const createRouter = () =>
  new Router({
    mode: 'history',
    routes: route
  })

const router = createRouter()
router.beforeEach((to, from, next) => {
  if (getUserInfo() == null && to.path !== '/login') {
    next(`/login?redirect=${to.path}`)
  }
  next()
})

export default router
