import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'reflect-metadata'
import 'animate.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
