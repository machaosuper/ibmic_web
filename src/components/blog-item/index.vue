<template>
  <div class="blog-item">
    <div class="blog-base-info flex">
    	<div class="title">{{itemData.title}}</div>
    	<div class="type" v-if="itemData.category">{{itemData.category.name}}</div>
    </div>
    <div class="disc">
    	{{itemData.describe}}
    </div>
    <ul class="blog-other-info">
    	posted@
    	<li class="user">
    		<!-- <i class="el-icon-service"></i> -->2017-05-24 22:21
    	</li>
    	<li class="time" v-if="itemData.user">
    		<!-- <i class="el-icon-date"></i> -->{{itemData.user.name}}
    	</li>
    	<li class="user">
    		<!-- <i class="el-icon-view"></i> -->阅读({{itemData.pv}})
    	</li>
    	<li class="user">
    		<!-- <i class="el-icon-view"></i> -->评论(10)
    	</li>
    	<li class="user">
    		<!-- <i class="el-icon-star-off"></i> -->收藏(10)
    	</li>
    	
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex2: '1'
    }
  },
  props: {
    itemData: Object
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
	.blog-item{
		margin: 10px 0;
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0 0 4px #C5C5C5;
		padding: 20px;
		.disc{
			text-align: left;
			margin-bottom: 20px;
		}
		.blog-base-info{
			justify-content: space-between;
			text-align: center;
			margin-bottom: 20px;
		}
		.blog-other-info{
			text-align: right;
			>li{
				display: inline-block;
				margin-left: 10px;
			}
		}
	}
</style>
