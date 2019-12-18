import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
