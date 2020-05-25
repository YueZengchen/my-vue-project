import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const route = [
  {
    path: '/',
    component: () => import('@/layout'),
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
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
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
];
const createRouter = () => new Router({
  mode: 'history',
  routes: route
});

const router = createRouter();

export default router;
