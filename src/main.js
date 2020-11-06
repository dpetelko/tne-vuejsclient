import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueConfirmDialog from 'vue-confirm-dialog'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue.js'
import 'bootstrap/dist/js/bootstrap.js'
import Dialog from 'vue-dialog-loading'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Dialog, {
  dialogBtnColor: '#0f0',
  background:'rgba(0, 0, 0, 0.5)'
})
Vue.use(Vuelidate)
Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
