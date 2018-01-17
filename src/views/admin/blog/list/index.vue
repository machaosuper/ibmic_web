<template>
  <div class="category-list">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/main/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="flex title">
      <div>笔记列表</div>
      <!-- <el-button @click="addType">新增分类</el-button> -->
    </div>
    <el-table
      class="category-table"
      size="medium"
      :data="listData.notes"
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="title"
        label="笔记名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="user.name"
        label="来自用户">
      </el-table-column>
      <el-table-column
        prop="pv"
        label="浏览量"
        width="180">
      </el-table-column>
      <el-table-column
        prop="meta.createAt"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column label="删除">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :background="true"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="listData.total">
      </el-pagination>  
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'CategoryList',
    components: {},
    data () {
      return {
        currentPage: 1,
        pageSize: 10,
        listData: {}
      }
    },
    created () {
      this.initData()
      // console.log(this.user)
    },
    mounted () {
      // this.$nextTick(() => {
      //   console.log(this.user)
      // })
      if (this.user.role <= 10) {
        console.log(this.user.role)
        this.$router.push('/main/home')
      }
    },
    watch: {
      'user' (to, from) {
        console.log(this.user)
        if (this.user.role <= 10) {
          console.log(this.user.role)
          this.$router.push('/main/home')
        }
      }
    },
    computed: {
      ...mapState({
        user: state => state.user.user
      })
    },
    methods: {
      initData (pageNo) {
        this.$http.post('list', {pageSize: this.pageSize, pageNo: (pageNo || 0)}).then((res) => {
          console.log(res)
          if (res.code === '000000') {
            this.listData = res.data
          }
        })
      },
      tableRowClassName ({row, rowIndex}) {
        if ((rowIndex % 4) === 1) {
          return 'warning-row'
        } else if ((rowIndex % 4) === 3) {
          return 'success-row'
        } else {
          return ''
        }
        // if (rowIndex === 1) {
        //   return 'warning-row'
        // } else if (rowIndex === 3) {
        //   return 'success-row'
        // }
        // return ''
      },
      handleEdit (index, item) {
        // console.log(index, row)

      },
      handleDelete (index, item) {
        // console.log(index, item)
        this.$http.post('del', {
          id: item._id
        }).then((res) => {
          console.log(res)
          if (res.code === '000000') {
            this.initData()
          }
        })
      },
      addType () {
        this.$prompt('请输入新增的类型名称', '', {
          confirmButtonText: '提交',
          cancelButtonText: '取消'
        }).then(({ value }) => {
          this.$http.post('admin/category/save', {name: value}).then((res) => {
            console.log(res)
            this.initData()
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
      },
      handleCurrentChange () {
        this.initData(this.currentPage - 1)
      },
      handleSizeChange () {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .category-list{
    padding-top: 20px;
    .category-table{

      padding: 20px 20px 50px 20px;
      overflow: hidden;
    }
    .title{
      margin-top: 20px;
      justify-content: space-between;
      align-items: center;
      line-height: 50px;
      background-color: #9DD6C5;
      padding: 0 20px;
      border-radius: 5px 5px 0 0;
    }
    .pagination{
      margin-top: 30px;
      text-align: right;
    }
  }

</style>
