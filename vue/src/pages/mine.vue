<template>
	<transition name="fade">
		<div class="mine common">
			<div class="logo">
				<img src="../../static/img/login_logo.png"/>
			</div>
			<div class="form">
				<input type="text" placeholder="用户名" v-model="user"/>
				<input type="password" placeholder="密码" v-model="psd"/>
				<button @click="login">登录</button>
			</div>
			<div class="link">
				<router-link to="/register">注册</router-link>
				<router-link to="/forget">忘记密码</router-link>
			</div>
		</div>
	</transition>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name : 'mine',
		data(){
			return{
				user : '',
				psd : ''
			}
		},
		methods:{
			login(){
				
			}
		},
		mounted(){
			
		},
		computed : {
			
		}
	}
</script>

<style scoped>
.mine{
	background: url(../../static/img/login_bg.png);
	background-size: cover;
	padding-top: 1.5625rem;
}
.logo{
	text-align: center;
	margin-bottom: 0.9375rem;
}
.logo img{
	width: 2.7775rem;
}
.form{
	padding: 0 0.3125rem;
	margin-bottom: 0.9375rem;
}
.form input{
	width: 100%;
	height: 1.46875rem;
	border: 0.015625rem solid #E8E8E8;
	outline: none;
	padding: 0.15625rem 0.625rem;
	font-size: 0.4375rem;
}
.form button{
	width: 100%;
	height: 1.46875rem;
	margin-top: 0.9375rem;
	color: white;
	font-size: 0.46875rem;
	border-radius: 0.15625rem;
	border: none;
	background: #42B983;
}
.link{
	padding: 0 0.3125rem;
}
.link a{
	color: #42B983;
}
.link a:last-child{
	float: right;
}
</style>