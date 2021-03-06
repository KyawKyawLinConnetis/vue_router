import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router.js'
import jquery from 'jquery'
window.$ = window.jquery = jquery

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
