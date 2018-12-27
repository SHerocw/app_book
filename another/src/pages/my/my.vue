<template>
	<div class="container">
		<div class="my-header">
			<div class="headerPic">
				<i class="fa fa-smile-o" v-if="!isShowHeader"></i>
				<img :src="user.pic" v-if="isShowHeader" alt="">
			</div>
			<p v-if="isShowHeader">欢迎您</p>
			<span v-if="isShowHeader" @click="quit">退出</span>
			<p v-if="!isShowHeader"><router-link to="/login">登录</router-link> | <router-link to="/register">注册</router-link></p>
		</div>

		<div class="list">
			<div class="item" v-for="(i,index) in options" :key="index">
				<router-link to="">
					<i class="fa left" :class="i.icon"></i>
					<span>{{i.text}}</span>
					<i class="fa fa-angle-right right"></i>
				</router-link>
			</div>
		</div>

		<div class="list select">
			<div class="item">
				<router-link to="">
					<span>夜间模式</span>
					<i class="fa fa-angle-right right"></i>
				</router-link>
			</div>
			<div class="item">
				<router-link to="">
					<span>接收推送</span>
					<i class="fa fa-angle-right right"></i>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex';
	export default {
		name : 'my',
		data (){
			return {
				options : [{
					icon : 'fa-star-o',
					text : '我的收藏',
					url : ''
				},{
					icon : 'fa-commenting-o',
					text : '我的评论',
					url : ''
				},{
					icon : 'fa-bookmark-o',
					text : '我的关注',
					url : ''
				},{
					icon : 'fa-search',
					text : '新闻搜索',
					url : ''
				},{
					icon : 'fa-sun-o',
					text : '设置',
					url : ''
				}],
				isShowHeader : false,
				user : {
					pic : ''
				}
			}
		},
		methods : {
			quit (){
				localStorage.removeItem('user');
				this.isShowHeader = false
			}
		},
		mounted (){
			if(localStorage.user){
				this.isShowHeader = true
				this.user = JSON.parse(localStorage.user);
			}else{
				this.isShowHeader = false
			}
		}
	}
</script>
<style scoped lang="less">
	.my-header{
		text-align: center;
		background:#49bdf0;
		color:#fff;
		padding:0.64rem 0;

		.headerPic{
			width:1.6rem;
			height:1.6rem;
			border-radius: 50%;
			overflow:hidden;
			margin:0.16rem auto;

			i{
				font-size:1.6rem;
			}

			img{
				width:1.6rem;
				height:1.6rem;
				border-radius: 50%;
			}
		}

		a{
			color:#fff;
			margin:0 0.24rem;
		}
	}

	.list{
		margin: 0.24rem 0;
		background:#fff;
		padding: 0 0.32rem;
		
		.item{
			border-bottom:1px solid #eee;
			font-size:0.426667rem;
			line-height: 1.12rem;
			position:relative;
			
			i{
				height:100%;
				position:absolute;
				line-height: 1.12rem;
			}
			.left{
				color:#49bdf0;
				left:0rem;
			}

			.right{
				right:0;
			}

			span{
				padding-left: .8rem;
			}

			a{
				color:#333;
			}
		}
	}
	.select .item span{
		padding:0;
	}
</style>