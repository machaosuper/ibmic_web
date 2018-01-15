<template>
  <div id="main">
    <!-- <img src="./assets/logo.png"> -->
    <Header/>
    <div class="container">
      <router-view/> 
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  name: 'app',
  components: { Header }
}
</script>

<style lang="scss">
</style>
