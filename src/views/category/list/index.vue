<template>
  <div class="category-list">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>分类管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="flex title">
      <div>分类列表</div>
      <el-button @click="addType">新增分类</el-button>
    </div>
    <el-table
      class="category-table"
      size="medium"
      :data="categoryListData"
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="count"
        label="子数量">
      </el-table-column>
      <el-table-column
        prop="creatDate"
        label="日期"
        width="180">
      </el-table-column>
      
      
      <el-table-column label="更新">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        </template>
      </el-table-column>
      <el-table-column label="删除">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'CategoryList',
    components: {},
    data () {
      return {
        categoryListData: []
      }
    },
    created () {
      this.initData()
    },
    methods: {
      initData () {
        this.$http.get('admin/category/list').then((res) => {
          console.log(res)
          if (res.code === '000000') {
            this.categoryListData = res.data
          }
        })
      },
      tableRowClassName ({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row'
        } else if (rowIndex === 3) {
          return 'success-row'
        }
        return ''
      },
      handleEdit (index, item) {
        // console.log(index, row)

      },
      handleDelete (index, item) {
        console.log(index, item)
        this.$http.post('admin/category/edit', {
          editType: '02',
          categoryId: item._id
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
  }

</style>
