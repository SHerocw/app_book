<template>
	<div class="container">
		<div class="wrapper" ref="wrapper">
			<div class="wrap">
				<div class="title">
					<h2>{{articleData.title}}</h2>
					<span>{{articleData.time}}</span>
				</div>
				<div class="content" v-html="articleData.text" @load="refresh">
				</div>
			</div>
		</div>

		<div class="footer">
			<i class="fa fa-angle-left" @click="back"></i>
			<div class="write" @click="show">
				<i class="fa fa-pencil"></i>
				说两句
			</div>
			<p>
				<i class="fa fa-commenting-o"></i>
				<span>{{articleData.msgNum}}</span>
			</p>
			<i class="fa" :class="{'fa-star-o' : !articleData.isCollect,'fa-star' : articleData.isCollect}" @click="collect"></i>
			<i class="fa fa-external-link"></i>
		</div>

		<div class="shade" @click="hide" v-if="isShowTextarea"></div>

		<transition name="slide">
			<div class="textarea" v-if="isShowTextarea">
				<textarea v-model="textNum" @input="change"></textarea>
				<div class="operate">
					<span :style="errStyle">{{textNum.length}}/1000</span>
					<div class="btn">
						<button>取消</button>
						<button class="send">发表</button>
					</div>
				</div>
			</div>
		</transition>
		
		<transition name="fade">
			<div class="alert" v-if="isShowAlert">
				<i class="fa fa-check-square"></i>
				<p>{{articleData.isCollect ? '收藏成功' : '取消收藏成功'}}</p>
			</div>
		</transition>
	</div>
</template>
<script>
	import BScroll from 'better-scroll';
	import Swiper from 'swiper';
	import { mapState } from 'vuex';
	export default {
		name : 'activity',
		data (){
			return {
				articleData : null,
				isCollect : false,
				textNum : '',
				errStyle : {
					color : '#666'
				},
				isShowTextarea : false,
				isShowAlert : false,
				time : null
			}
		},
		methods : {
			back (){
				this.$router.go(-1)
			},
			initScroll (){
				this.scroll = new BScroll(this.$refs.wrapper,{
					click : true,
				})
			},
			refresh (){
				this.scroll.refresh();
			},
			collect (){
				this.$store.commit('changeCollect',this.$route.params.id);
				this.isShowAlert = true;
				clearTimeout(this.time)
				this.time = setTimeout(() => {
					this.isShowAlert = false
				},1000)
				
			},
			change (){
				this.errStyle = this.textNum.length > 1000 ? {color : '#bc1717'} : {color : '#666'}
			},
			hide (){
				this.isShowTextarea = false
			},
			show (){
				this.isShowTextarea = true
			}
		},
		created (){
			this.$store.state.article.forEach((v,i) => {
				if(v.id == this.$route.params.id){
					this.articleData = v;
				}
			})
		},
		mounted (){
			this.initScroll();
		}
	}
</script>
<style scoped lang="less">
.container{
	width:100%;
	height:100%;

	.alert{
		width:4rem;
		height:3.2rem;
		border-radius: 0.24rem;
		position:fixed;
		left:0;
		right:0;
		bottom:0;
		top:0;
		margin:auto;
		padding:0.64rem;
		background:rgba(0,0,0,0.8);
		color:#fff;
		text-align: center;

		p{
			line-height: 1.28rem;
		}

		i{
			font-size:0.8rem;
		}
	}

	.shade{
		width:100%;
		height:100%;
		background:rgba(0,0,0,0.5);
		position:absolute;
		top:0;
		left:0;
		z-index:4;
	}
	.textarea{
		width:100%;
		height:4.4rem;
		padding:0.32rem;
		background:#efefef;
		position:absolute;
		bottom:0;
		left:0;
		z-index:5;

		textarea{
			width:100%;
			height:2.666667rem;
			border:1px solid #aaa;
		}

		.operate{
			display:flex;
			justify-content: space-between;
			margin-top:0.16rem;

			span{
				line-height:0.8rem; 
			}

			button{
				line-height: 0.8rem;
				padding: 0 0.3rem;
				background:#ddd;
				border:none;
				color:#777;
				margin-left:0.32rem;
			}
			.send{
				color:#fff;
				background:#49bdf0;
			}
		}
	}

	.wrapper{
		width:100%;
		height:100%;
		overflow:hidden;

		.title{
			padding:0.32rem;
			border-bottom:0.026667rem solid #ddd;

			h2{
				font-size:0.64rem;
			}

			span{
				color:#777;
				line-height: 0.906667rem;
			}
		}

		.content{
			padding:0.32rem;
			font-size:0.426667rem;
			letter-spacing: 0.026667rem;

			p{
				margin:0.426667rem 0;
			}
		}
	}

	.footer{
		width:100%;
		padding:0.24rem;
		position:fixed;
		bottom:0;
		display:flex;
		justify-content: space-between;
		background:#fff;
		border-top:1px solid #ccc;
		font-size:0.373333rem;

		.fa-angle-left{
			color:#49bdf0;
			font-size:0.64rem;
		}

		.write{
			width:5rem;
			height:0.64rem;
			line-height: 0.62rem;
			border:0.026667rem solid #ccc;
			color:#999;

			i{
				margin:0 0.16rem;
			}
		}

		i{
			line-height: 0.64rem;
		}

		.fa-star{
			color:#49bdf0;
		}
	}
}

.slide-enter-active, .slide-leave-active {
	transition: transform .5s;
}
.slide-enter,.slide-leave-to{
	transform:translateY(4.4rem);
}

.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
}
.fade-enter,.fade-leave-to{
	opacity:0;
}
</style>