import Vue from 'vue'
import Vuex from 'vuex'
import Navbar from './Modules/Navbar.js'
import LeadDivision from './Modules/LeadDivision.js'
import SubDivision from './Modules/SubDivision.js'

Vue.use(Vuex)

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
