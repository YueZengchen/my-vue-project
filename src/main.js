import '@/styles/index.scss' // global css
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Cookies from 'js-cookie'
import 'normalize.css/normalize.css' // 一种CSS reset的替代方案
import Vue from 'vue'
// import '@/assets/iconfont/iconfont.css';
import App from './App.vue'
import * as filters from './filters' // global filters
import router from './router'
import store from './store'
if (process.env.NODE_ENV !== 'production') require('./mock')
Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
  // i18n: (key, value) => i18n.t(key, value)
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
