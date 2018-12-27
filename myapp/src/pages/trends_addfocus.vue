<template>
	<div class="addfocus common">
		<div class="header">
			<router-link to="/trends"><img src="../../static/img/title_jiantou_left_gray.png"/></router-link>
			<span>添加关注</span>
			<b></b>
		</div>
		<div class="search">
			<router-link to="/search">
				<img src="../../static/img/search.png"/>
				<span>搜索用户ID/微信昵称</span>
			</router-link>
		</div>
		<div class="invite com2">
			<li v-for="(v,i) in invite">
				<img :src="v.bg"/>
				<h3>{{v.title}}</h3>
				<p>邀请更多好友></p>
			</li>
		</div>
		<div class="tab">
			<li v-for="(v,i) in tabs" :class="{active:i == index}" @click="tabChange(i)">{{v}}</li>
		</div>
		<div class="wrapper" ref="wrap">
			<div>
				<swiper :options="swiperOption" ref="mySwiper">
					<swiper-slide v-for="(slide,i) in follow" :key="i">
						<follows v-for="(item,a) in slide" :key="a" :data="item"></follows>	
					</swiper-slide>
				</swiper>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { mapState } from 'vuex' 
	import follows from '@/components/follows.vue'
	export default{
		name : 'trends_addfocus',
		data(){
			return{
				index : 0,
				invite : [{
					bg : './static/img/addfriend_wechat.png',
					title : '微信'
				},{
					bg : './static/img/addfriend_qq.png',
					title : 'QQ'
				},{
					bg : './static/img/addfriend_weibo.png',
					title : '微博'
				}],
				tabs : ['本周达人','优秀新人'],
				swiperOption:{
					resistanceRatio: 0,
					autoHeight: true,
					on:{
						slideChange:() => {
							let swiper = this.$refs.mySwiper.swiper;
							this.index = swiper.activeIndex
						}
					}
				}
			}
		},
		mounted(){
			const scroll = new BScroll(this.$refs.wrap,{
				click : true,
				scrollY : true
			})
		},
		computed : {
			...mapState(['follow']),
			swiper() {
		        return this.$refs.mySwiper.swiper
		    }
		},
		methods : {
			tabChange(i){
				this.index = i
				this.swiper.slideTo(i)
			}
		},
		components : {
			follows
		}
	}
</script>

<style scoped lang="less">
.view{
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 9;
}
.addfocus{
	width: 100%;
	height: 100%;
	background: #EEEEEE;
}
.header{
	background: white;
	img,b{
		display: inline-block;
		width: 0.5rem;
		height: 0.5rem;
	}
	span{
		font-size: 0.5625rem;
		font-weight: bold;
	}
}
.search{
	flex-shrink: 0;
	text-align: center;
	margin: 0.15625rem 0.3125rem;
	padding: 0.3125rem;
	border-radius: 0.15625rem;
	background: white;
	img{
		width: 0.5rem;
		height: 0.5rem;
		vertical-align: middle;
	}
	span{
		color: #666666;
		font-size: 0.4375rem;
	}
}
.invite{
	flex-shrink: 0;
	display: flex;
	li{
		color: white;
		padding: 0.15625rem;
		position: relative;
		img{
			width: 100%;
		}
		h3{
			position: absolute;
			font-size: 0.625rem;
			top: 0.625rem;
			right: 0.3125rem;
		}
		p{
			position: absolute;
			bottom: 0.3125rem;
			right: 0.3125rem;
		}
	}
}
.tab{
	flex-shrink: 0;
	padding: 0.3125rem;
	background: white;
	display: flex;
	justify-content: space-around;
	color: #666666;
	border-bottom: 0.03125rem solid #BBBBBB;
	font-size: 0.4375rem;
	li{
		transition: all .5s;
	}
	li.active{
		color: #0EA15F;
	}
	li.active:after{
		content: "";
		display: block;
		width: 0.625rem;
		height: 0.0625rem;
		margin: auto;
		background: #0EA15F;
		transform: translateY(0.3125rem);
	}
}
</style>