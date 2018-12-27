<template>
<div class="login">
	<div class="block">
		<img src="../../static/img/pic_logo.png"/>
	</div>
	<router-link to="/login/login_phone"><button class="phone">手机快捷登录</button></router-link>
	<button class="weChat">微信登录</button>
	<b>— 其他登录方式 —</b>
	<div class="other">
		<img src="../../static/img/icon_weibodengl_1.png"/>
		<img src="../../static/img/icon_weibodnegl_1.png"/>
	</div>
	<router-link to="/trends"><div class="noLogin">随便看看<i></i></div></router-link>
	<transition name="slide-right"><router-view class="focus"/></transition>
</div>
</template>

<script>
	export default{
		name : 'login'
	}
</script>

<style scoped lang="less">
.login{
	flex-grow: 1;
	background: white;
	padding: 0 1.25rem;
	display: flex;
	flex-direction: column;
	text-align: center;
	.block{
		flex-grow: 1;
		padding-top: 40%;
		img{
			width: 20%;
		}
	}
	button{
		width: 100%;
		height: 1.25rem;
		border-radius: 0.625rem;
		outline: none;
		margin: 0.1875rem;
		font-weight: bold;
	}
	.phone{
		background: #0EA15F;
		color: white;
		border: none;
	}
	.weChat{
		background: white;
		color: #0EA15F;
		border: 0.03125rem solid #0EA15F;
	}
	b{
		display: block;
		margin-top: 0.625rem;
		color: #666666;
		font-weight: lighter;
	}
	.other{
		display: flex;
		padding: 0.3125rem 0.625rem;
		justify-content: space-around;
		img{
			width: 0.9375rem;
			height: 0.9375rem;
		}
	}
	.noLogin{
		display: inline-block;
		height: 1.5625rem;
		line-height: 1.5625rem;
		color: #666666;
		i{
			display: inline-block;
			width: 0.3125rem;
			height: 0.375rem;
			background: url(../../static/img/icon_xiangzou.png) no-repeat;
			background-size: auto 100%;
			vertical-align: middle;
			margin-left: 0.21875rem;
		}
	}
}
</style>