<template>
	<transition name="slide-left">
		<div class="register">
			<div class="header">
				<h1>注册页面</h1> 
				<router-link class="goback" to="/mine"><i class="fa fa-long-arrow-left"></i> 登录</router-link>
			</div>
			<div class="reg_form">
				<h2>注册</h2>
				<input type="text" placeholder="用户名" v-model="user"/>
				<input type="text" placeholder="邮箱" v-model="email"/>
				<input type="text" placeholder="手机号" v-model="tel"/>
				<input type="password" placeholder="密码" v-model="psd"/>
				<input type="password" placeholder="再次输入密码" v-model="psdA"/>
				<button @click="does">完成</button>
			</div>
		</div>
	</transition>
</template>

<script>
	export default{
		name : 'register',
		data(){
			return{
				user : '',
				email : '',
				tel : '',
				psd : '',
				psdA : '',
				regUser : /^\w{6,20}$/,
				regEmail : /^[a-zA-Z\d]{1,}@[a-zA-Z\d]{1,}\.(com(\.cn)?|cn)$/,
				regTel : /^1(3\d|4[5679]|5[012356789]|66|7[0-8]|8[\d]|9[89])\d{8}$/,
				regPsd : /^\S{6,20}$/
			}
		},
		methods:{
			does(){
				if(this.user == '' || this.email == '' || this.tel == '' || this.psd == '' || this.psdA == ''){
					alert('不能为空')
				}
				else if(!this.user.match(this.regUser)){
					alert('账号格式错误')
				} else if(!this.email.match(this.regEmail)){
					alert('邮箱格式错误！')
				} else if(!this.tel.match(this.regTel)){
					alert('手机号格式错误！')
				} else if(!this.psd.match(this.regPsd)){
					alert('密码格式错误！')
				} else if(this.psd !== this.psdA){
					alert('两次密码输入不一致！')
				} 
				else{
					alert('恭喜,登录成功')
					location.href = '#/mine';
					var obj = {
						user : this.user,
						email : this.email,
						tel : this.tel,
						psd : this.psd,
						face : '../../static/img/person_touxiang.png'
					}
				}
			}
		}
	}
</script>

<style scoped>
.register{
	position: absolute;
	width: 100%;
	height: 100%;
	background: url(../../static/img/register_bg.jpg);
	background-size: 100% auto;
}
.goback{
	position: absolute;
	left: 0.15625rem;
	top: 0.15625rem;
	line-height: 0.9375rem;
	font-size: 0.5rem;
}
.header h1{
	width: 100%;
	line-height: 0.9375rem;
	font-size: 0.5625rem;
	text-align: center;
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