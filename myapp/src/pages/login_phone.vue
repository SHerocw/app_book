<template>
<div class="login_phone">
	<div class="header">
		<router-link to="/login"><img src="../../static/img/title_jiantou_left_gray.png"/></router-link>
		<span>手机登录</span>
		<b></b>
	</div>
	<div class="tab">
		<span @click="login_mag" :class="{active : msgShow}">短信登录</span>
		<span @click="login_psd" :class="{active : !msgShow}">密码登录</span>
	</div>
	<div class="form" v-if="msgShow">
		<div class="phone">+86<input type="text" placeholder="请输入手机号" v-model="phone_msg" @keyup="canLogin"/></div>
		<div class="vertify"><input type="text" placeholder="请输入验证码" @keyup="canLogin"/><button :class="{pass : canClick_msg}">获取验证码</button></div>
		<button :class="{pass : canClick_msg}">登录</button>
	</div>
	<div class="form" v-if="!msgShow">
		<input type="text" placeholder="请输入手机号" v-model="phone" @keyup="canLogin"/>
		<div class="psd"><input :type="TorP" placeholder="请输入密码" v-model="psd"/><i @click="toggleEye" :class="{show : seePsd}"></i></div>
		<p><router-link to="/login/register"><span>立即注册</span></router-link><router-link to="/login/forget"><span>忘记密码？</span></router-link></p>
		<button :class="{pass : canClick_psd}" @click="tologin">登录</button>
	</div>
	<div class="agree">登录即为同意<span>《服务协议》</span></div>
	<transition name="slide-bottom"><div class="hint" v-if="hintShow"><span>{{hint}}</span></div></transition>
</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default{
		name :'login_phone',
		data(){
			return{
				canClick_msg : false,
				canClick_psd : false,
				seePsd : false,
				msgShow : true,
				TorP : 'password',
				phone_msg : '',
				phone : '',
				psd : '',
				hintShow : false,
				hint : ''
			}
		},
		methods : {
			canLogin(){
				var regTel = /^1(3\d|4[5679]|5[012356789]|66|7[0-8]|8[\d]|9[89])\d{8}$/
				if(regTel.test(this.phone_msg)){
					this.canClick_msg = true
				}else{
					this.canClick_msg = false
				}
				if(regTel.test(this.phone)){
					this.canClick_psd = true
				}else{
					this.canClick_psd = false
				}
			},
			toggleEye(){
				if(this.seePsd){
					this.TorP = 'password'
				}else{
					this.TorP = 'text'
				}
				this.seePsd = !this.seePsd
			},
			login_mag(){
				this.msgShow = true
			},
			login_psd(){
				this.msgShow = false
			},
			tologin(){
				if(this.canClick_psd){
					var result = this.login({
						phone : this.phone,
						psd : this.psd
					})
					if(result){
						this.hintShow = true
						this.hint = result
						setTimeout(() => {
							this.hintShow = false
						},2000)
					}else{
						this.$router.push({path : '/trends'})
					}
				}
			}
		},
		computed : {
			...mapGetters(['login']),
		}
	}
</script>

<style scoped lang="less">
.login_phone{
	background: white;
	.header{
		font-size: 0.46875rem;
		border-bottom: 0.03125rem solid #EEEEEE;
		background: white;
		img,b{
			width: 0.46875rem;
			height: 0.46875rem;
		}
	}
	.tab{
		padding: 1.25rem;
		font-size: 0.46875rem;
		display: flex;
		justify-content: space-around;
		span.active{
			color: #0EA15F;
		}
	}
	
	.form{
		padding: 0 1.25rem;
		.phone{
			display: flex;
			align-items: center;
			border-bottom: 0.0625rem solid #EEEEEE;
			input{
				border: none;
			}
		}
		.vertify{
			position: relative;
			button{
				position: absolute;
				top: 0;
				right: 0;
				width: 2.5rem;
				height: 0.78125rem;
				font-size: 0.375rem;
				background: white;
				color: #D9D9D9;
				border: 0.03125rem solid #D9D9D9;
				border-radius: 0.125rem;
			}
		}
		input{
			font-size: 0.4375rem;
			width: 100%;
			border: none;
			border-bottom: 0.046875rem solid #EEEEEE;
			padding: 0.46875rem 0.15625rem;
		}
		.psd{
			position: relative;
			i{
				display: inline-block;
				position: absolute;
				top: 0.625rem;
				right: 0.3125rem;
				width: 0.46875rem;
				height: 0.46875rem;
				background: url(../../static/img/login_eye_on.png) no-repeat;
				background-size: 100% auto;
			}
			i.show{
				background: url(../../static/img/login_eye_off.png) no-repeat;
				background-size: 100% auto;
			}
		}
		p{
			margin: 0.3125rem;
			display: flex;
			justify-content: space-between;
			a{
				color: #0EA15F;
			}
		}
		button{
			width: 100%;
			margin-top: 0.3125rem;
			height: 1.25rem;
			border-radius: 0.625rem;
			border: none;
			color: white;
			font-size: 0.46875rem;
		}
		button.pass{
			background: #0EA15F;
			color: white;
			border: none;
		}
	}
	.hint{
		width: 100%;
		position: absolute;
		bottom : 1.25rem;
		text-align: center;
		span{
			display: inline-block;
			padding: 0.3125rem;
			background: rgba(0,0,0,.5);
			border-radius: 0.125rem;
			color: white;
		}
	}
	.agree{
		width: 100%;
		margin-top: 1.5625rem;
		color: #666666;
		span{
			text-decoration: underline;
		}
	}
}
</style>