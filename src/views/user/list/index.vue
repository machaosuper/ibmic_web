<template>
  <div class="category-list">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/main/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="flex title">
      <div>用户列表</div>
      <!-- <el-button @click="addType">新增分类</el-button> -->
    </div>
    <el-table
      class="category-table"
      size="medium"
      :data="userListData"
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="name"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="用户邮箱">
      </el-table-column>
      <el-table-column
        prop="meta.createAt"
        label="日期"
        width="180">
      </el-table-column>
      
      
      <el-table-column label="状态">
        <template slot-scope="scope">
           <el-select v-model="scope.row.role" @change="handleSelect(scope.row)"  placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>

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
        userListData: [],
        options: [{
          value: 0,
          label: '未激活'
        }, {
          value: 1,
          label: '普通用户'
        }, {
          value: 2,
          label: '专业用户'
        }, {
          value: 11,
          label: '管理员'
        }, {
          value: 101,
          label: '超级管理员'
        }]
      }
    },
    created () {
      this.initData()
    },
    methods: {
      initData () {
        this.$http.get('user/list').then((res) => {
          console.log(res)
          if (res.code === '000000') {
            this.userListData = res.data
          }
        })
        // this.$http.get('category/list').then((res) => {
        //   console.log(res)
        //   if (res.code === '000000') {
        //     this.categoryListData = res.data
        //   }
        // })
      },
      handleSelect (row) {
        console.log(row)
        this.$http.post('user/update', {id: row._id, role: row.role}).then((res) => {
          console.log(res)
          if (res.code === '000000') {
            this.initData()
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
        this.$http.post('user/del', {id: item._id}).then((res) => {
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
