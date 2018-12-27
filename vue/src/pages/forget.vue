<template>
	<transition name="slide-left">
		<div class="forget">
			<div class="header">
				<h1>忘记密码</h1> 
				<router-link class="goback" to="/mine"><i class="fa fa-long-arrow-left"></i> 登录</router-link>
			</div>
			<div class="reg_form">
				<h2>忘记密码</h2>
				<input type="text" placeholder="用户名"/>
				<input type="text" placeholder="手机号"/>
				<input type="password" placeholder="密码"/>
				<input type="password" placeholder="再次输入密码"/>
				<button>完成</button>
			</div>
		</div>
	</transition>
</template>

<script>
	export default{
		name : 'forget'
	}
</script>

<style scoped>
.forget{
	position: absolute;
	width: 100%;
	height: 100%;
	background: url(../../static/img/register_bg.jpg);
	background-size: 100% auto;
}
.header h1{
	width: 100%;
	line-height: 0.9375rem;
	font-size: 0.5625rem;
	text-align: center;
}
.goback{
	position: absolute;
	left: 0.15625rem;
	top: 0.15625rem;
	line-height: 0.9375rem;
	font-size: 0.5rem;
}
.reg_form{
	padding: 0.3125rem;
}
.reg_form h2{
	width: 100%;
	color: white;
	font-size: 0.9375rem;
	text-align: center;
	margin: 1.25rem 0 0.78125rem;
}
.reg_form input{
	width: 100%;
	height: 1.46875rem;
	background: rgba(255,255,255,.6);
	outline: none;
	padding-left: 0.46875rem;
	border: 0.015625rem solid #fff;
	border-bottom: none;
}
.reg_form input:nth-child(6){
	border: 0.015625rem solid #fff;
}
.reg_form button{
	width: 100%;
	height: 1.46875rem;
	margin-top: 0.625rem;
	border-radius: 0.15625rem;
	border: none;
	background: #42B983;
	color: white;
}
</style>