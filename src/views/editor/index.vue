<template>
  <div class="blog-editor">
    <div class="title">发表笔记</div>
    <div class="content">
      <div class="select-type-title flex">
        <el-select v-model="blogType" placeholder="请选择笔记类型">
          <el-option
            v-for="item in categoryListData"
            :key="item._id"
            :label="item.name"
            :value="item._id">
          </el-option>
        </el-select>
        <div class="title-input">
          <el-input v-model="blogTitle" placeholder="请输入笔记标题"></el-input>
        </div>
      </div>
      
      
      <el-input class="disc-input" v-model="blogDisc" type="textarea" :rows="2" :maxlength="50" :autosize="{ minRows: 2, maxRows: 6 }" placeholder="请输入笔记相关描述"></el-input>
      <div class="editor-util">
        <mavon-editor ref="md" v-model="blogContent" @imgAdd="imgAdd" @imgDel="imgDel" :subfield="false" :ishljs = "true" :toolbars="toolbars"/> 
      </div>
       <el-button class="submit-btn" type="primary" @click="submit">发布</el-button>
    </div>
    
  </div>
</template>

<script>
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  export default {
    name: 'New',
    components: { mavonEditor },
    data () {
      return {
        blogContent: '',
        blogTitle: '',
        blogDisc: '',
        blogType: '',
        categoryListData: [],
        toolbars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: true, // 上角标
          subscript: true, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          help: true, // 帮助
          /* 1.3.5 */
          // undo: true, // 上一步
          // redo: true, // 下一步
          trash: true, // 清空
          // save: true, // 保存（触发events中的save事件）
          /* 1.4.2 */
          // navigation: true, // 导航目录
          /* 2.1.8 */
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
          /* 2.2.1 */
          subfield: true, // 单双栏模式
          preview: true // 预览
        }
      }
    },
    created () {
      this.$http.get('category/list').then((res) => {
        console.log(res)
        if (res.code === '000000') {
          this.categoryListData = res.data
        }
      })
    },
    methods: {
      submit () {
        let params = {
          note: {
            title: this.blogTitle,
            describe: this.blogDisc,
            content: this.blogContent,
            category: this.blogType
          }
        }
        this.$http.post('save', params).then((res) => {
          console.log(res)
          if (res.code === '000000') {
            this.$router.push({name: 'Detail', params: {id: res.data._id}})
          }
        })
      },
      imgAdd (pos, file) {
        // console.log(pos)
        // console.log(file)
        let formdata = new FormData()
        formdata.append('image', file)
        this.$http.post('upload', formdata, {headers: {'Content-Type': 'multipart/form-data'}}).then((res) => {
          console.log(res)
          if (res.code === '000000') {
            this.$refs.md.$img2Url(pos, res.data)
          }
        })
      },
      imgDel () {}
    }
  }
</script>

<style scoped lang="scss">
  .blog-editor{
    margin-top: 10px;
    background-color: #fff;
    text-align: left;
    border-radius: 5px;
    .title{
      line-height: 40px;
      background-color: #ddd;
      border-radius: 5px 5px 0 0;
      padding-left: 20px;
    }
    .content{
      padding: 0 20px 20px 20px;
      .select-type-title, .disc-input, .submit-btn, .editor-util{
        margin-top: 20px;
      }
      .select-type-title{
        .title-input{
          min-width: 500px;
          margin-left: 20px;
        }
      }
    }
  }
</style>
