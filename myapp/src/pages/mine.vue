<template>
<div class="mine common" ref="mine">
	<transition name="slide-right"><router-view class="focus"/></transition>
	<div class="header" :class="{show : headshow}">
		<h4>{{isLogin ? 'YOURNAME' : '未登录'}}</h4>
		<p>
			<i class="mail"><router-link to="/mine/mail"></router-link></i>
			<i class="setting"><router-link to="/mine/setting"></router-link></i>
		</p>
	</div>
	<div class="wrapper">
		<div class="content">
			<div class="top">
				<div class="top_header">
					<i class="mail"><router-link to="/mine/mail"></router-link></i>
					<i class="setting"><router-link to="/mine/setting"></router-link></i>
				</div>
				<div class="login" v-if="!isLogin">
					<div class="figure">
						<img src="../../static/img/avatar.png"/>
					</div>
					<div class="text">
						<h2 @click="toLoginShow">立即登录</h2>
						<p>查看或编辑个人信息</p>
					</div>
				</div>
				<div class="login" v-if="isLogin">
					<div class="figure">
						<img src="../../static/img/avatar.png"/>
					</div>
					<div class="text">
						<h2>YOURNAME</h2>
						<p>ID：1000000</p>
						<p><span>关注：1</span> <span>粉丝：0</span></p>
					</div>
				</div>
			</div>
			<div class="infos">
				<li>
					<img src="../../static/img/icon_qianbao.png"/>
					<h5>￥0.00</h5>
				</li>
				<li>
					<img src="../../static/img/icon_xuexichengjiu.png"/>
					<h5>LV0</h5>
				</li>
				<li>
					<img src="../../static/img/icon_yigou.png"/>
					<h5>0</h5>
				</li>
			</div>	
			<div class="vip com2">
				<h1>开通会员</h1>
				<div class="vipright">
					<div class="img">
						<img src="../../static/img/vip_v2.png"/>
					</div>
					<div class="text">
						<h4>有书会员</h4>
						<p>免费听书500本</p>
					</div>
				</div>
			</div>
			<div class="list">
				<ul v-for="(ul,num) in settings">
					<li v-for="(li,i) in ul"><img :src="li.icon" />{{li.title}} <b></b></li>
				</ul>
			</div>
		</div>
	</div>
			
</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { mapState , mapMutations } from 'vuex'
	export default {
      name: 'mine',
      computed : {
      	...mapState(['settings','isLogin'])
      },
      data(){
      	return{
      		headshow : true,
      		scroll : ''
      	}
      },
      methods : {
      	...mapMutations(['toLoginShow'])
      },
      mounted(){
      	const scroll = new BScroll('.wrapper',{
			click : true,
			bounce : false,
			probeType : 1
		});
		scroll.on('scroll',(e) => {
			if(e.y < -60){
				this.headshow = false
			}else{
				this.headshow = true
			}
		})
      }
    }
</script>

<style scoped lang="less">
.focus{
	z-index: 9;
}
.header{
	position: fixed;
	top: 0;
	left: 0;
	z-index: 8;
	transition: opacity 0.5s;
	border-bottom: 0.03125rem solid #D9D9D9;
	background: white;
	overflow: hidden;
	h4{
		font-size: 0.625rem;
		font-weight: bold;
	}
	p{
		padding: 0.46875rem 0.3125rem;
		i{
			display: inline-block;
			width: 0.6125rem;
			height: 0.6125rem;
		}
		i.mail{
			background: url(../../static/img/my_sixin_black.png);
			background-size: cover;
			margin-right: 0.9375rem;
		}
		i.setting{
			background: url(../../static/img/my_settings_black.png);
			background-size: cover;
		}
	}	
}
.header.show{
	opacity: 0;
	height: 0;
	padding: 0;
}
i a{
	display: inline-block;
	width: 100%;
	height: 100%;
}
.top{
	height: 5.625rem;
	background: url(../../static/img/default_img.jpg);
	background-size: cover;
	.top_header{
		text-align: right;
		padding: 0.46875rem;
		i{
			display: inline-block;
			width: 0.6125rem;
			height: 0.6125rem;
		}
		i.mail{
			background: url(../../static/img/my_sixin.png);
			background-size: cover;
			margin-right: 0.9375rem;
		}
		i.setting{
			background: url(../../static/img/my_settings.png);
			background-size: cover;
		}
	}
	.login{
		padding: 0.625rem;
		align-items: center;
		display: flex;
		.figure{
			margin-right: 0.3125rem;
			width: 1.875rem;
			img{
				width: 100%;
			}
		}
		.text{
			color: white;
			h2{
				font-size: 0.75rem;
				font-weight: bold;
			}
		}
	}
}
.infos{
	padding: 0.625rem;
	display: flex;
	background: white;
	margin-bottom: 0.3125rem;
	justify-content: space-between;
	text-align: center;
	li{
		font-size: 0.46875rem;
		font-weight: bold;
		width: 1.25rem;
		img{
			width: 100%;
			margin-bottom: 0.3125rem;
		}
		h5{
			font-weight: bold;
		}
	}
	li:nth-child(1){
		color: #f97062;
	}
	li:nth-child(2){
		color: #fbc536;
	}
	li:nth-child(3){
		color: #19be59;
	}
}
.vip{
	h1{
		font-weight: bold;
		font-size: 0.5rem;
	}
	.vipright{
		height: 3.75rem;
		display: flex;
		align-items: center;
		background: url(../../static/img/vip_bg_big.png) no-repeat center center;
		background-size: auto 100%;
		padding: 0.925rem 1.25rem;
		.img{
			margin: 0 0.625rem;
		}
		h4{
			color: #85693A;
			font-weight: bold;
			font-size: 0.5625rem;
		}
		p{
			color: #BDA06C;
			font-size: 0.46875rem;
			margin-top: 0.3125rem;
		}
	}
}
.list{
	ul{
		margin-bottom: 1.25rem;
		background: white;
		margin-bottom : 0.1875rem;
		li{
			padding: 0.46875rem;
			font-size: 0.46875rem;
			border-bottom: 0.03125rem solid #eee;
			img{
				width: 0.5625rem;
				height: 0.5625rem;
				vertical-align: middle;
				margin-right: 0.46875rem;
			}
			b{
				display: inline-block;
				width: 0.3125rem;
				height: 0.375rem;
				background: url(../../static/img/title_jiantou_right_gray.png) no-repeat;
				background-size: auto 100%;
				vertical-align: middle;
				float: right;
			}
		}
	}
}
</style>