<template>
<div class="toLogin" v-if="toLogin">
	<div class="body">
		<div class="close" @click="toLoginHide"></div>
		<img src="static/img/pic_lihe.png"/>
		<p>送你一份见面礼</p>
		<p>立即登录，海量好书免费听</p>
		<router-link to="/gift"><span @click="hide">查看礼包内容<i></i></span></router-link>
		<button class="phone" @click="login">手机快捷登录</button>
		<button class="weChat">微信登录</button>
		<b>— 其他登录方式 —</b>
		<div class="other">
			<img src="../../static/img/login_qq.png"/>
			<img src="../../static/img/login_weibo.png"/>
		</div>
	</div>
</div>
</template>

<script>
	import { mapState , mapGetters , mapMutations } from 'vuex'
	export default{
		name : 'toLogin',
		data(){
			return{
				
			}
		},
		methods:{
	     	...mapMutations(['toLoginHide','todayHide']),
	     	hide(){
	     		this.toLoginHide();
	     		this.todayHide();
	     	},
	     	login(){
	     		this.$router.push({path : '/login/login_phone'})
	     		this.toLoginHide();
	     	}
		},
		computed : {
			...mapState(['toLogin'])
		},
	}
</script>

<style scoped lang="less">
.toLogin{
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	z-index: 99;
	background: rgba(0,0,0,.4);
	.body{
		text-align: center;
		position: relative;
		width: 6.25rem;
		height: 10rem;
		background: white;
		margin: auto;
		border-radius: 0.15625rem;
		.close{
			position: absolute;
			top: -0.46875rem;
			right: -0.46875rem;
			width: 0.9375rem;
			height: 0.9375rem;
			border: 0.0325rem solid #FFFFFF;
			border-radius: 50%;
			background: url(../../static/img/login_close.png);
			background-size: cover;
		}
		img{
			width: 80%;
			margin-bottom: 0.15625rem;
		}
		p{
			color: #444;
			line-height: 0.625rem;
		}
		span{
			display: inline-block;
			margin: 0.3125rem;
			color: #ffca55;
			i{
				display: inline-block;
				width: 0.46875rem;
				height: 0.4375rem;
				background: url(../../static/img/icon_xiangzuo.png) no-repeat;
				background-size: auto 100%;
				vertical-align: middle;
				margin-left: 0.1875rem;
			}
		}	
		button{
			width: 85%;
			height: 1.09375rem;
			border-radius: 0.15625rem;
			margin: 0.15625rem 0;
		}
		.phone{
			color: white;
			background: #0EA15F;
			border: none;
		}
		.weChat{
			color: #0EA15F;
			border: 0.03125rem solid #0EA15F;
			background: white;
		}
		b{
			color: #999;
			font-weight: lighter;
			display: inline-block;
			margin: 0.3125rem;
		}
		.other{
			display: flex;
			padding: 0 0.625rem;
			justify-content: space-around;
			img{
				width: 0.625rem;
				height: 0.625rem;
			}
		}
	}
}
</style>