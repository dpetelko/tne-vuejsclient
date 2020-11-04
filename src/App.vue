<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import Home from '@/views/Home.vue'
import LeadDivisionIndex from '@/views/LeadDivision/Index'
import SubDivisionIndex from '@/views/SubDivision/Index'
import SubDivisionDetails from '@/views/SubDivision/Details'
export default {
  computed: {
layout() {
  return (this.$route.meta.layout || 'main') + '-layout'
}
  },
  components: {
    MainLayout, Home, LeadDivisionIndex,SubDivisionIndex, SubDivisionDetails
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
