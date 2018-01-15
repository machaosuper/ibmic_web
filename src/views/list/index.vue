<template>
  <div class="list">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>我的笔记</el-breadcrumb-item>
    </el-breadcrumb>
    <ul class="blog-list">
      <li>
        <BlogItem/>
      </li>
      <li>
        <BlogItem/>
      </li>
      <li>
        <BlogItem/>
      </li>
    </ul>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :background="true"
        :page-size="10"
        layout="total, prev, pager, next"
        :total="1000">
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
        currentPage: 1
      }
    },
    methods: {
      handleSizeChange () {
      },
      handleCurrentChange () {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .list{
    padding-top: 10px;
    .pagination{
      text-align: right;
    }
  }
</style>
