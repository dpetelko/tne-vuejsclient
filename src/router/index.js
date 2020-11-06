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
      props: true,
      meta: {layout: 'main'},
      component: () => import('../views/LeadDivision/Index.vue')
    },
    {
      path: '/lead-divisions/details',
      name: 'LeadDivisionDetails',
      props: true,
      meta: {layout: 'main'},
      component: () => import('../views/LeadDivision/Details.vue')
    },
    {
      path: '/lead-divisions/create',
      name: 'LeadDivisionCreate',
      props: true,
      meta: {layout: 'main'},
      component: () => import('../views/LeadDivision/Create.vue')
    },
    {
      path: '/lead-divisions/edit',
      name: 'LeadDivisionEdit',
      props: true,
      meta: {layout: 'main'},
      component: () => import('../views/LeadDivision/Edit.vue')
    },
    {
      path: '/sub-divisions/index',
      name: 'SubDivisionsIndex',
      props: true,
      meta: {layout: 'main'},
      component: () => import('../views/SubDivision/Index.vue')
    },
    {
      path: '/sub-divisions/details',
      name: 'SubDivisionDetails',
      props: true,
      meta: {layout: 'main'},
      component: () => import('../views/SubDivision/Details.vue')
    },
    {
      path: '/sub-divisions/create',
      name: 'SubDivisionCreate',
      props: true,
      meta: {layout: 'main'},
      component: () => import('../views/SubDivision/Create.vue')
    },
    {
      path: '/sub-divisions/edit',
      name: 'SubDivisionEdit',
      props: true,
      meta: {layout: 'main'},
      component: () => import('../views/SubDivision/Edit.vue')
    }
  ]
})

export default router
