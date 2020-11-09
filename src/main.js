import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/router'
import store from './vuex/store'
import vuetify from './plugins/vuetify'


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
