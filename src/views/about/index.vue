<template>
  <div class="about">
  	<el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>关于我</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
    	<h1 class="title">联系方式</h1>
    	<dl>
    		<dt>qq：</dt>
    		<dd>272110541</dd>
    	</dl>
    	<dl>
    		<dt>Email：</dt>
    		<dd>272110541@qq.com</dd>
    	</dl>
    	<dl>
    		<dt>mobile：</dt>
    		<dd>17621726210</dd>
    	</dl>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About',
    components: {},
    data () {
      return {
        blogData: {},
        blogContent: ''
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .about{
    padding-top: 20px;
    text-align: left;
    .content{
    	.title{
    		padding: 30px;
    		font-size: 30px;
    		text-align: center;
    	}
    	dl {
    		margin: 0 auto;
    		dt, dd{
    			display: inline-block;
    			font-size: 18px;
    			line-height: 38px;
    		}
    	}
    }
  }
</style>
