<template>
  <div class="header">
    <banner/>
    <div class="header-nav">
      <div class="header-nav-content">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          background-color="transparent"
          mode="horizontal"
          @select="handleSelect"
          text-color="#fff"
          :router="true"
          active-text-color="#ffd04b">
          <el-menu-item index="/main/home">首页</el-menu-item>
          <el-menu-item index="/admin/category/list">分类管理</el-menu-item>
          <el-menu-item index="/admin/user/list">用户管理</el-menu-item>
          <el-menu-item index="/admin/blog/list">数据管理</el-menu-item>
        </el-menu>
      </div>
    </div>
    
  </div>
</template>

<script>
import banner from './banner'
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: ''
    }
  },
  components: { banner },
  created () {
    this.activeIndex = this.$route.path
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
  .header{
    background: rgba(250, 250, 250, 0.9);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1501;
    .demo-input-suffix{
      margin: 10px 0;
      span{
        width: 80px;
      }
    }
    .header-wrapper{
      height: 100px;
      width: 1024px;
      max-width: 1024px;
      margin: 0 auto;
      justify-content: space-between;
      align-items: center;
      .logo{
        color: #A3A9AD;
        font-size: 20px;
        span{
          font-size: 30px;
          color: #9DD6C5;
        }
      }
      .user{
        color: #8f8e94;
        font-size: 13px;
        .sign >span{
          margin: 0 10px;
          cursor: pointer;
          // &:hover{
          //   color: #9DD6C5;
          // }
        }
        .welcome >span{
          margin-right: 10px;
          &:last-child{
            margin: 0 10px;
            cursor: pointer;
          }
        }
      }
    }
    .header-nav{
      background-color: #545c64;
      .header-nav-content{
        width: 1024px;
        max-width: 1024px;
        margin: 0 auto;
        .el-menu--horizontal{
          border-bottom: none;
        }
      }
    }
  }
</style>
