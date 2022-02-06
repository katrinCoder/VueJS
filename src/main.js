import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import modal from './plugins/modal/index'
import menu from './plugins/modal/menu'

Vue.config.productionTip = false
Vue.use(modal)
Vue.use(menu)

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app')
