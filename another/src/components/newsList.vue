<template>
	<div class="news">
		<div class="item" v-for="(item,index) in newsData" :key="index">
			<router-link :to="{name : 'article', params : {id : item.id}}">
				<img :src="item.pic" alt="" @load="refresh">
				<div class="news-title">{{item.text}}</div>
				<span class="msgNum"><i class="fa fa-commenting-o"></i> {{item.msgNum}}</span>
			</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		name : 'newsList',
		props : ['newsData'],
		methods : {
			refresh(){
				this.$parent.scroll.refresh()
			}
		}
	}
</script>
<style scoped lang="less">
	.news{
		.item{
			padding:0.32rem 0.24rem;
			display:flex;
			position:relative;

			a{
				display:flex;
				color:#333;
			}

			img{
				width:3.2rem;
				height:2.4rem;
			}

			.news-title{
				margin-left:0.32rem;
				font-size:0.48rem;
			}

			.msgNum{
				position:absolute;
				right:0.24rem;
				bottom:0.32rem;
				color:#999;
			}
		}

		.loading{
			text-align: center;
			font-size:0.64rem;
		}
	}
</style>