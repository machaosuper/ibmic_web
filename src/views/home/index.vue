<template>
  <div class="home">
    <ul class="blog-list">
      <li v-for="item in blogListData.notes" @click="$router.push('/main/detail/' + item._id)">
        <BlogItem :itemData="item"/>
      </li>
      <li class="no-data" v-if="blogListData.notes && blogListData.notes.length === 0">没有数据</li>
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
    name: 'Home',
    components: { BlogItem },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        currentPage: 1,
        pageSize: 10,
        blogListData: {}
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData (pageNo) {
        this.$http.post('list', {pageSize: this.pageSize, pageNo: (pageNo || 0)}).then((res) => {
          console.log(res)
          if (res.code === '000000') {
            this.blogListData = res.data
          }
        })
      },
      handleSizeChange () {
      },
      handleCurrentChange () {
        // console.log(this.currentPage)
        this.getData(this.currentPage - 1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .home{
    .pagination{
      text-align: right;
      margin-top: 30px;
    }
    .el-dialog, .el-pager li{
        background: transparent!important;

    }
    .el-pagination .btn-next, .el-pagination .btn-prev{
      background-color: transparent;
    }
  }
</style>
