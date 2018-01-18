<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <Header/> -->
    <!-- <div class="container"> -->
      <router-view/> 
    <!-- </div> -->
    <div v-loading.fullscreen.lock="loading"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['loading'])
  },
  watch: {
    'loading' () {
      // console.log(this.loading)
    }
  }
}
</script>

<style lang="scss">
body{
  background-color: #f4f5f7;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5a4c4c;
  /*margin-top: 60px;*/
  padding-bottom: 80px;
  .container{
    padding-top: 160px;
    width: 1024px;
    margin: 0 auto;
  }
  .el-table__body-wrapper{
    overflow: hidden;
  }
  .warning-row {
    background: oldlace;
  }
  .success-row {
    background: #f0f9eb;
  }
  .el-table th{
    text-align: center;
  }
  .no-data{
    padding-top: 60px;
    color: salmon
  }
    
}
</style>
