<template>
  <div class="banner">
    <div class="header-wrapper flex">
      <div class="logo">
        不会喊麦的
        <span>MC.超</span>
      </div>
      <div class="user">
        <div class="sign" v-if="!user.name">
          <span @click="showSignin = true">登录</span>|<span  @click="showSignup = true">注册</span>
        </div>
        <div class="welcome" v-if="user.name">
          欢迎，<span>{{user.name}}</span>|<span @click="logout">登出</span>
        </div>
      </div>
    </div>
    <!-- 登录 -->
    <el-dialog
      title="登录"
      :visible.sync="showSignin"
      width="30%"
      :modal-append-to-body="false"
      center>
      <div class="demo-input-suffix flex">
        <span>用户名：</span>
        <el-input
          placeholder="请输入用户名"
          v-model="name">
          <i slot="prefix" class="el-input__icon"></i>
        </el-input>
      </div>
      <div class="demo-input-suffix flex">
        <span>密码：</span>
        <el-input
          placeholder="请输入用户密码"
          v-model="password">
          <i slot="prefix" class="el-input__icon"></i>
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showSignin = false">取 消</el-button>
        <el-button type="primary" @click="signin">登 录</el-button>
      </span>
    </el-dialog>
    <!-- 注册 -->
    <el-dialog
      title="注册"
      :visible.sync="showSignup"
      width="30%"
      :modal-append-to-body="false"
      center>
      <div class="demo-input-suffix flex">
        <span>邮箱：</span>
        <el-input
          placeholder="请输入用户邮箱"
          v-model="email">
          <i slot="prefix" class="el-input__icon"></i>
        </el-input>
      </div>
      <div class="demo-input-suffix flex">
        <span>用户名：</span>
        <el-input
          placeholder="请输入用户名"
          v-model="name">
          <i slot="prefix" class="el-input__icon"></i>
        </el-input>
      </div>
      <div class="demo-input-suffix flex">
        <span>密码：</span>
        <el-input
          placeholder="请输入用户密码"
          v-model="password">
          <i slot="prefix" class="el-input__icon"></i>
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showSignup = false">取 消</el-button>
        <el-button type="primary" @click="signup">注 册</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex2: '1',
      showSignin: false,
      showSignup: false,
      name: '',
      password: '',
      email: '',
      user: {}
    }
  },
  created () {
    this.$http.get('user/info').then((res) => {
      console.log(res)
      if (res.code === '000000') {
        this.user = res.data
      }
    })
  },
  methods: {
    // 登录
    signin () {
      this.$http.post('user/signin', {name: this.name, password: this.password}).then((res) => {
        console.log(res)
        if (res.code === '000000') {
          this.user = res.data
          this.showSignin = false
        }
      })
    },
    // 登出
    logout () {
      this.$http.get('user/logout').then((res) => {
        console.log(res)
        if (res.code === '000000') {
          this.user = {}
        }
      })
    },
    // 注册
    signup () {
      this.$http.post('user/signup', {name: this.name, password: this.password, email: this.email}).then((res) => {
        console.log(res)
        if (res.code === '000000') {
          this.user = res.data
          this.showSignup = false
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .banner{
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
  }
</style>
