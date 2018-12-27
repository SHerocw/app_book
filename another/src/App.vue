<template>
	<div id="app">
		<transition :name="transitionName">
			<router-view />
		</transition>
		<div class="nav-bar nav-bar-bottom" v-if="$route.meta.showNav">
			<ul>
				<li v-for="(nav,index) in navs">
					<router-link :to="nav.path">
						<i class="fa" :class="$route.path == nav.path ? nav.selectIcon : nav.defaultIcon"></i>
						{{nav.title}}
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data (){
			return {
				navs : [{
					path : '/consultation',
					selectIcon : 'fa-bookmark',
					defaultIcon : 'fa-bookmark-o',
					title : '资讯'
				},{
					path : '/activity',
					selectIcon : 'fa-flag',
					defaultIcon : 'fa-flag-o',
					title : '活动'
				},{
					path : '/local',
					selectIcon : 'fa-square',
					defaultIcon : 'fa-square-o',
					title : '地方'
				},{
					path : '/my',
					selectIcon : 'fa-user',
					defaultIcon : 'fa-user-o',
					title : '我的'
				}],
			}
		},
		computed : {
			transitionName (){
				return this.$store.state.transitionName
			}
		}
	}
</script>
<style lang="less">
*{
	box-sizing: border-box;
}
html,body{
	width:100%;
	height:100%;
	background:#f9f9f9;
}
a:hover{
	text-decoration: none;
}

#app{
	width:100%;
	height:100%;
	position:relative;
	overflow:hidden;
	perspective: 13.333333rem;

	.container{
		width:100%;
		height:100%;
		padding-bottom:1.2rem;
		position:absolute;
		background:#f9f9f9;

		.title-default{
			width:100%;
			height:1.2rem;
			background:#49bdf0;
			color:#fff;
			text-align: center;
			line-height: 1.2rem;

			.left{
				position:absolute;
				top:0;
				left:10px;
				font-size:0.64rem;
				line-height: 1.013333rem;
			}

			h3{
				font-family: '宋体';
				font-size:0.48rem;
			}
		}

		.header{
			text-align: center;
			background:#49bdf0;
			color:#fff;
			padding:0.64rem 0.64rem;
			display:flex;
			justify-content: space-around;

			.icon{
				width:1.44rem;
				height:1.44rem;
				border-radius: 50%;
				background:rgba(255,170,120,.5);
				line-height: 1.44rem;
				font-size: 0.64rem;
			}
		}

		.growp{
			background:#fff;
			margin-bottom:0.48rem;
			position:relative;
			border-top:0.026667rem solid #ddd;

			.pass{
				input{
					padding-right: 1.6rem;
				}
			}

			.item{
				padding:0.32rem;
				position:relative;
				border-bottom:0.026667rem solid #ddd;

				i{
					font-size:0.48rem;
					margin-right:0.32rem;
					line-height: 1.2rem;
					position:absolute;
					top:0;
					left:0.32rem;
					color:#aaa;
				}

				input{
					width:100%;
					border:none;
					font-size:0.48rem;
					padding-left:0.64rem;
				}
				input::-webkit-input-placeholder {
					color:#aaa;
				}

				a{
					color:#49bdf0;
					position:absolute;
					right:0.32rem;
					top:0;
					line-height: 1.2rem;
				}

				.input-identifying{
					padding-right: 2.4rem;
				}
			}

			.identifying{
				position:absolute;
				height:1.253333rem;
				top:-1px;
				right:0;
				background:#49bdf0;
				color:#fff;
				line-height: 1.253333rem;
				width:2.4rem;
				text-align: center;
			}
		}

		.submit{
			padding:0 0.32rem;
			font-size:0.373333rem;

			.warning{
				color:#bc1717;
				height:0.96rem;
				line-height: 0.96rem;

				p{
					display:none;
				}
			}

			.show {
				p{
					display:block;
				}
			}

			.btn{
				width:100%;
				border:none;
				background:#49bdf0;
				color:#fff;
				line-height: 0.96rem;
				font-size:0.48rem;
				border-radius: 0.08rem;
			}

			.protocol{
				line-height: 1.12rem;

				a{
					color:#333;
				}
			}

			.goRegister{
				text-align: right;
				line-height: 1.12rem;

				a{
					color:#49bdf0;
				}
			}
		}
	}

	.nav-bar{
		position:absolute;
		bottom:0;
		width:100%;
		height:1.2rem;
		overflow:hidden;
		background:#fff;

		ul{
			display:flex;
			justify-content: space-around;
			text-align: center;
			padding:0.213333rem 0;

			.router-link-active{
				color:#49bdf0;
			}

			a{
				color:#000;
			}
			
			i{
				font-size:0.48rem;
				display:block;
			}
		}
	}

	.nav-bar-bottom{
		border-top:0.026667rem solid #ccc;
		bottom:0;
	}
}
.banner .swiper-pagination-current{
	color:#49bdf0;
}

.left-enter {
  transform: translate3d(100%, 0, 0);
}
.left-leave-to {
  transform: translate3d(-20%, 0, 0);
}
.left-enter-active,
.left-leave-active {
  transition: transform .4s ease;
}
.right-enter {
  transform: translate3d(-20%, 0, 0);
}
.right-leave-to {
  transform: translate3d(100%, 0, 0);
}
.right-enter-active,
.right-leave-active {
  transition: transform .4s ease;
}
.right-leave-active {
  z-index: 2;
}

.content p{
	margin:0.426667rem 0;
	text-indent: 2em;
	line-height: 0.746667rem;
	color:#333;
}
</style>
