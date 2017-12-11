import Vue from 'vue'
import VueRouter from 'vue-router'

import { store } from './store/index.js'
import { routes } from './routes'
import App from './App.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

const myApp = new Vue({
  store,
  router,
  template: '<App/>',
  components: {App}
})
myApp.$mount('#app')
