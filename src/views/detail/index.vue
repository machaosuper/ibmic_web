<template>
  <div class="detail">
  	<el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="base-info flex">
      <div class="title" v-if="blogData.note">{{blogData.note.title}}</div>
      <div v-if="blogData.note">
        <span>标签:{{blogData.note.category.name}}</span>
        <span>作者:{{blogData.note.user.name}}</span>
        <span>日期:{{blogData.note.meta.updateAt}}</span>
        <span>编辑</span>
      </div>
    </div>
    <div class="content">
      <div class="markdown-body" v-html="blogContent"></div>
    </div>
    <div class="base-info flex">
      <div class="title">评价</div>
    </div>
    <div class="content">
      <ul class="appraise-list">
        <li class="appraise-item flex" v-for="item in blogData.comments">
          <div class="left">
            <div class="user-info">
              <span class="name">{{item.from.name}}</span>
              <span class="time"><strong> · </strong>at: 2017-01-16</span>
            </div>
            <div class="appraise-content">
              {{item.content}}
            </div>
          </div>
          <i class="el-icon-edit" @click="addAppraiseUser(item.from.name)"></i> 
        </li>
      </ul>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入评价内容"
        v-model="appraiseContent">
      </el-input>
      <el-button @click.native="submitAppraise" class="appraise-btn" type="primary">发表评价</el-button>
    </div>
    <!-- <div class="appraise">
      <div class="appraise-title">评价</div>
      <ul class="appraise-content">
        <li>
          <div class="name">name</div>
          <div class="content">content</div>
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
  var markdownIt = mavonEditor.mixins[0].data().s_markdown
  export default {
    name: 'Detail',
    components: { mavonEditor },
    data () {
      return {
        blogData: {},
        blogContent: '',
        appraiseContent: ''
      }
    },
    created () {
      this.getData()
    },
    mounted () {
      // console.log(markdownIt.render('# title'))
      // this.blogContent = window.markdownIt.render('# 粗体 \r\n **粗体**  \n\r## *斜体*')
    },
    methods: {
      getData () {
        this.$http.post('detail', {id: this.$route.params.id}).then((res) => {
          console.log(res)
          if (res.code === '000000') {
            this.blogData = res.data
            this.blogContent = markdownIt.render(this.blogData.note.content)
          }
        })
      },
      submitAppraise () {
        this.$http.post('comment', {
          note: this.$route.params.id,
          content: this.appraiseContent
        }).then((res) => {
          console.log(res)
          if (res.code === '000000') {
            this.getData()
          }
        })
      },
      addAppraiseUser (name) {
        let reg = new RegExp('@' + name, 'gi')
        if (!reg.test(this.appraiseContent)) {
          this.appraiseContent = this.appraiseContent + '@' + name + ' '
        }
      }
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
      .appraise-list{
        .appraise-item{
          line-height: 35px;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #eee;
          margin-bottom: 30px;
          .user-info{
            .time{
              color: #999;
              font-size: 14px;
              strong{
                font-size: 30px;
                vertical-align: middle;
              }
            }
          }
        }
      }
      .appraise-btn{
        margin-top: 20px;
      }
    }
  }
</style>
