<template>
  <div class="hello">
    <ul>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
    </ul>
    <div>
      <el-button @click="show = !show">Click Me</el-button>

      <div style="display: flex; margin-top: 20px; height: 100px;">
        <transition name="el-fade-in-linear">
          <div v-show="show" class="transition-box">.el-fade-in-linear</div>
        </transition>
        <transition name="el-fade-in">
          <div v-show="show" class="transition-box">.el-fade-in</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
