import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const route = [
  {
    path: '/',
    // component: Layout
    component: () => import('@/views/first-page/index'),
    name: 'first-page'
  }
];
const createRouter = () => new Router({
  routes: route
});

const router = createRouter();

export default router;
