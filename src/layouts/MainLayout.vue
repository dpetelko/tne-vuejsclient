<template>
  <div>
    <Navbar/>
    <router-view/>
  </div>

</template>

<script>
import Navbar from '@/components/global/Navbar.vue'

export default {
  name: 'main-layout',
  components: {
    Navbar
  }
}
</script>
