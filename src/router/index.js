import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {layout: 'main'},
      component: () => import('../views/Home.vue')
    },
    {
      path: '/lead-divisions/index',
      name: 'LeadDivisionsIndex',
      meta: {layout: 'main'},
      component: () => import('../views/LeadDivision/Index.vue')
    },
    {
      path: '/lead-divisions/details',
      name: 'LeadDivisionsDetails',
      props: true,
      meta: {layout: 'main'},
      component: () => import('../views/LeadDivision/Details.vue')
    }

  ]
})

export default router
