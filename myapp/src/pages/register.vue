<template>
	<div class="register">
		<div class="header">
			<router-link to="/login/login_phone"><img src="../../static/img/title_jiantou_left_gray.png"/></router-link>
			<span>手机注册</span>
			<b></b>
		</div>
		<div class="form">
			<div class="phone"><input type="text" placeholder="请输入手机号" v-model="phone" @keyup="canLogin"/></div>
			<div class="psd"><input :type="TorP" placeholder="请输入密码" v-model="psd"/><i @click="toggleEye" :class="{show : seePsd}"></i></div>
			<button :class="{pass : canClick}" @click="toregister">注册</button>
		</div>
		<transition name="slide-bottom"><div class="hint" v-if="hintShow"><span>{{hint}}</span></div></transition>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default{
		name : 'register',
		data (){
			return{
				phone : '',
				psd : '',	
				seePsd : false,
				TorP : 'password',
				canClick : false,
				hintShow : false,
				hint : ''
			}
		},
		methods : {
			canLogin(){
				var regTel = /^1(3\d|4[5679]|5[012356789]|66|7[0-8]|8[\d]|9[89])\d{8}$/;
				if(regTel.test(this.phone)){
					this.canClick = true
				}else{
					this.canClick = false
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
			toregister(){
				var regPsd = /^\S{6,20}$/;
				if(this.canClick){
					var result = this.register({
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
						this.$router.go(-1)
					}
				}	
			}
		},
		computed : {
			...mapGetters(['register']),
		}
	}
</script>

<style scoped lang="less">
.register{
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
	.form{
		padding: 0 1.25rem;
		margin-top: 2.5rem;
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
			margin-top: 1.09375rem;
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
}
</style>