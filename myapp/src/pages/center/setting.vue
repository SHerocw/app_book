<template>
<div class="setting">
	<div class="header">
		<router-link to="/mine"><img src="../../../static/img/title_jiantou_left_gray.png"/></router-link>
		<span>账户设置</span>
		<b></b>
	</div>
	<ul>
		<h1>账户与安全<span>手机绑定与更换<i class="arrow_right"></i></span></h1>
	</ul>
	<ul>
		<h1>使用2G/3G/4G网络播放<b :class="{active:checked}" @click.stop="useFlow"><i></i></b></h1>
	</ul>
	<ul>
		<h1>关于有书<span><i class="arrow_right"></i></span></h1>
		<h1>使用帮助<span><i class="arrow_right"></i></span></h1>
		<h1>清理缓存<span>0MB<i class="arrow_right"></i></span></h1>
	</ul>
	<ul>
		<h1 class="red" @click="exitORenter">{{isLogin ? '退出' : '前往'}}登录</h1>
	</ul>
	<div class="alert" v-if="alertShow">
		<div class="content">
			<p>您是否决定退出当前账号？</p>
			<button class="cancel" @click="cancel">取消</button><button class="sure" @click="sure">确定</button>
		</div>
	</div>
</div>
</template>

<script>
	import { mapState , mapMutations } from 'vuex'
	export default{
		name : 'setting',
		data(){
			return{
				checked : false,
				alertShow : false
			}
		},
		methods : {
			...mapMutations(['exit']),
			useFlow(){
				this.checked = !this.checked
			},
			exitORenter(){
				if(this.isLogin){
					this.alertShow = true
				}else{
					this.$router.push({path : '/login'})
				}
			},
			cancel(){
				this.alertShow = false
			},
			sure(){
				this.alertShow = false
				this.exit();
				localStorage.clear()
			}
		},
		computed : {
     		...mapState(['isLogin'])
     	}
	}
</script>

<style scoped lang="less">
.header{
	background: white;
	border-bottom: 0.03125rem solid #EEEEEE;
	img,b{
		width: 0.46875rem;
		height: 0.46875rem;
	}
}
ul{
	margin-top: 0.3125rem;
	background: white;
	h1{
		padding: 0.46875rem;
		border-bottom: 0.03125rem solid #EEEEEE;
		span,b{
			color: #666666;
			float: right;
		}
		b{
			display: block;
			width: 1.25rem;
			height: 0.625rem;
			border-radius: 0.625rem;
			border: 0.03125rem solid #D9D9D9;
			background: #EEEEEE;
			text-align: left;
			i{
				display: inline-block;
				width: 50%;
				height: 100%;
				background: white;
				border-radius: 50%;
			}
		}
		b.active{
			text-align: right;
			background: #0EA15F;
		}
	}
	h1.red{
		color: red;
		text-align: center;
	}
}
.alert{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0,0,0,.5);
	display: flex;
	align-items: center;
	padding: 0.625rem;
	.content{
		text-align: center;
		width: 100%;
		background: white;
		overflow: hidden;
		border-radius: 0.125rem;
		p{
			padding: 0.40625rem;
			border-bottom: 0.03125rem solid #EEEEEE;
		}
		button{
			width: 50%;
			border-right: 0.03125rem solid #EEEEEE;
			border: none;
			background: white;
			padding: 0.3125rem;
		}
		.cancel{
			color: red;
		}
	}
		
}
</style>