import Vue from 'vue'
import Vuex from 'vuex'
import Navbar from './Modules/Navbar.js'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import LeadDivision from './Modules/LeadDivision.js'
import SubDivision from './Modules/SubDivision.js'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    LeadDivision, SubDivision, Navbar
  }
})
