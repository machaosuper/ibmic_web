<template>
  <div class="detail">
  	<el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="base-info flex">
      <div class="title" v-if="blogData.note">{{blogData.note.title}}</div>
      <div>
        <span>标签:javascript</span>
        <span>作者:mac</span>
        <span>日期:2018-05-01</span>
        <span>编辑</span>
      </div>
    </div>
    <div class="content">
      <div class="markdown-body" v-html="blogContent"></div>
    </div>
    <!-- <div class="appraise">
      <div class="appraise-title"></div>
      <ul class="appraise-content">
        <li>
          <img src="" alt="" class="portrait">
          
        </li>
      </ul>
    </div> -->
    
    <!-- <mavon-editor :subfield="false" v-model="blogContent" :ishljs="true" default_open="preview" :toolbarsFlag="false"></mavon-editor> -->
    <mavon-editor v-show="false" :ishljs="true"></mavon-editor>
  </div>
</template>

<script>
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  export default {
    name: 'Detail',
    components: { mavonEditor },
    data () {
      return {
        blogData: {},
        blogContent: ''
      }
    },
    created () {
      let markdownIt = mavonEditor.mixins[0].data().s_markdown
      this.$http.post('detail', {id: this.$route.params.id}).then((res) => {
        console.log(res)
        if (res.code === '000000') {
          this.blogData = res.data
          this.blogContent = markdownIt.render(this.blogData.note.content)
        }
      })
      // console.log(this.$http)
      // this.$http.post('user/signup', {name: 'admin', password: 'admin'}).then((res) => {
      //   console.log(res)
      // })
      // this.$http.post('user/signin', {name: 'admin', password: 'admin'}).then((res) => {
      //   console.log(res)
      // })
    },
    mounted () {
      // console.log(markdownIt.render('# title'))
      // this.blogContent = window.markdownIt.render('# 粗体 \r\n **粗体**  \n\r## *斜体*')
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .detail{
    padding-top: 10px;
    text-align: left;
    .base-info{
      margin-top: 20px;
      padding-left: 20px;
      padding-right: 20px;
      line-height: 70px;
      font-size: 16px;
      font-weight: bold;
      background-color: #9DD6C5;
      justify-content: space-between;
      border-radius: 5px 5px 0 0;
      .title{
        font-size: 21px;
      }
      span{
        margin-left: 10px;
      }
    }
    .content{
      // margin-top: 20px;
      border-radius: 0 0 5px 5px;
      background-color: #fff;
      padding: 20px;
    }
  }
</style>
