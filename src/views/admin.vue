<template>
  <div id="admin">
    <!-- <img src="./assets/logo.png"> -->
    <Header/>
    <div class="container">
      <router-view/> 
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/admin_header'
export default {
  name: 'app',
  components: { Header }
}
</script>

<style lang="scss">
</style>
