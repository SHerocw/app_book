<template>
	<div class="study common">
		<div class="header">
			<span>学习</span>
			<i></i>
		</div>
		<div class="login" v-if="!isLogin">
			<h2 @click="toLoginShow">立即登录</h2>
			<p>-查看个人学习历程-</p>
		</div>
		<div class="login logined" v-if="isLogin">
			<li><span>0本</span><b>累计阅读</b></li>
			<li><span>0h0m</span><b>阅读时长</b></li>
			<li><span>0次</span><b>签到</b></li>
		</div>
		<div class="mystudy">
			<h1>
				<p><b>我的学习</b>查看全部 ></p>
				<span><i></i>播放全部</span>
			</h1>
			<div class="study_con">
				<div class="img">
					<img src="static/img/fu.jpg" />
				</div>
				<div class="text">
					<h3>傅佩荣的先秦哲学课</h3>
					<p>最新：晚读丨为什么孔子的接班人不是荀子？</p>
					<div class="bottom">
						<h6><b>共读</b>今日 更新2条</h6>
						<span><i></i>播放</span>
					</div>
				</div>
			</div>
		</div>
		<div class="setting">
			学习任务设置 >
		</div>
   </div>
</template>

<script>
	import { mapState , mapMutations } from 'vuex'
	export default {
      	name: 'study',
      	methods:{
	     	...mapMutations(['toLoginShow'])
     	},
     	computed : {
     		...mapState(['isLogin'])
     	}
    }
</script>

<style scoped lang="less">
.study{
	flex-grow: 1;
	background: white;
	.header{
		background: #2DAF7E;
		span{
			font-weight: bold;
			color: white;
			font-size: 0.5625rem;
		}
		i{
			display: inline-block;
			width: 0.5625rem;
			height: 0.5625rem;
			background: url(../../static/img/setting_add.png);
			background-size: cover;
		}
	}
	.login{
		height: 3.75rem;
		margin-bottom: 0.3125rem;
		background: url(../../static/img/bg_header.png) center bottom;
		background-size: 100% auto;
		padding-top: 1.25rem;
		text-align: center;
		color: white;
		h2{
			font-size: 0.75rem;
			margin-bottom: 0.3125rem;
			font-weight: bold;
		}
	}
	.logined{
		padding-top: 1.875rem;
		display: flex;
		justify-content: space-around;
		font-size: 0.4375rem;
		span,b{
			display: block;
			width: 100%;
			text-align: center;
		}
	}
	.mystudy{
		border-bottom: 0.03125rem solid #D9D9D9;
		padding: 0.46875rem;
		h1{
			justify-content: space-between;
			display: flex;
			align-items: center;
			p{
				color: #666666;
				b{
					font-size: 0.625rem;
					vertical-align: middle;
					margin-right: 0.3125rem;
					color: black;
				}
			}
			span{
				display: inline-block;
				padding: 0.3125rem;
				background: #42B983;
				color: white;
				border-radius: 0.5625rem;
				font-size: 0.4375rem;
				i{
					margin-right: 0.15625rem;
					display: inline-block;
					border-bottom: 0.15625rem solid transparent;
					border-top: 0.15625rem solid transparent;
					border-left: 0.1875rem solid white;
				}
			}
		}
		.study_con{
			margin: 0.46875rem 0;
			display: flex;
			.img{
				margin-right: 0.46875rem;
				width: 3.125rem;
				img{
					width: 100%;
					flex-shrink: 0;
					border-radius: 0.15625rem;
				}
			}
			.text{
				flex-grow: 1;
				h3{
					font-weight: bold;
					font-size: 0.5rem;
					margin-bottom: 0.3125rem;
				}
				.bottom{
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 0.625rem;
					h6{
						color: #666666;
						b{
							font-weight: lighter;
							border: 0.03125rem solid #0EA15F;
							color: #0EA15F;
							padding: 0.0625rem 0.09375rem;
							border-radius: 0.09375rem;
							margin-right: 0.09375rem;
						}
					}
					span{
						display: inline-block;
						padding: 0.15625rem 0.46875rem;
						font-size: 0.46875rem;
						background: #E9F2EF;
						color: #0EA15F;
						border-radius: 0.5625rem;
						i{
							margin-right: 0.15625rem;
							display: inline-block;
							border-bottom: 0.15625rem solid transparent;
							border-top: 0.15625rem solid transparent;
							border-left: 0.1875rem solid #0EA15F;
						}
					}
				}
			}
		}
	}
	.setting{
		text-align: center;
		color: #0EA15F;
		padding: 0.46875rem 0;
		font-size: 0.46875rem;
	}
}
</style>