<template>
  <div class="list">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{this.$route.params.type | crumbText}}</el-breadcrumb-item>
    </el-breadcrumb>
    <ul class="blog-list">
      <li v-for="item in blogListData.notes" @click="$router.push('/main/detail/' + item._id)">
        <BlogItem :itemData="item"/>
      </li>
      <li class="no-data" v-if="!blogListData.notes || blogListData.notes.length === 0">没有数据</li>
    </ul>

    <div class="pagination" v-if="blogListData.notes && blogListData.notes.length > 0">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :background="true"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="blogListData.total">
      </el-pagination>  
    </div>
    

  </div>
</template>

<script>
  import BlogItem from '@/components/blog-item'
  export default {
    name: 'List',
    components: { BlogItem },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        currentPage: 1,
        pageSize: 10,
        blogListData: {}
      }
    },
    filters: {
      crumbText (type) {
        let text = ''
        switch (type) {
          case 'my':
            text = '我的笔记'
            break
          default:
            text = type
        }
        return text
      }
    },
    created () {
      this.initData()
    },
    watch: {
      '$route' (to, from) {
        if (to.name === from.name && to.name === 'List') {
          this.initData()
        }
      }
    },
    methods: {
      initData () {
        let category = this.$route.params.type
        let categoryId = this.$route.query.id
        let params = {}
        params.category = category
        params.pageSize = this.pageSize
        params.pageNo = this.currentPage - 1
        if (category !== 'my') {
          params.category = categoryId
        }
        this.$http.post('list', params).then((res) => {
          console.log(res)
          if (res.code === '000000') {
            this.blogListData = res.data
          }
        })
      },
      handleSizeChange () {
      },
      handleCurrentChange () {
        this.initData()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .list{
    padding-top: 20px;
    .blog-list{
      padding-top: 20px;
    }
    .pagination{
      text-align: right;
      margin-top: 30px;
    }
  }
</style>
