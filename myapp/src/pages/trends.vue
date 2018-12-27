<template>
	<div class="trends common">
		<div class="header">
			<ul class="left">
				<li v-for="(v,i) in tabs" @click="changeTabs(i)" :class="{active:i == index}">{{v}}</li>
			</ul>
			<ul class="right">
				<li><router-link to="/trends/trends_addfocus"><img src="../../static/img/addpeople_white_v1.png" /></router-link></li>
				<li><router-link to="/search"><img src="../../static/img/search_white_v1.png"/></router-link></li>
			</ul>
		</div>
		<div class="wrapper">
			<div class="content">
				<swiper :options="swiperOption" ref="mySwiper">
				    <swiper-slide class="wrapper">
				    	<div class="tab1_head">
				    		<h1>今日学习<router-link to="/study">查看全部<img src="../../static/img/myachieve_right_white.png"/></router-link></h1>
				    		<div class="input" @click="toStudy"><span>共读</span>【有书共读】2篇</div>
				    	</div>
				    	<div class="tab1_list">
				    		<list-rec v-for="(i,index) in tab1_list" :data="i" :key="index" :more_flag="more_flag"></list-rec>
				    	</div>
				    </swiper-slide>
				    <swiper-slide class="wrapper">
				    	<div class="tab2_list">
				    		<list-rec v-for="(i,index) in tab2_list" :data="i" :key="index" ></list-rec>
				    	</div>
				    </swiper-slide>
				    <swiper-slide class="wrapper">
				    	<div class="tab3">
					    	<div class="hot">
					    		<h4>热门订阅</h4>
					    		<ul class="orders">
					    			<li v-for="(i,index) in orders" :key="index" @click="toInfoPath(index)"><div><img :src="i.face"/></div><p>{{i.nickname}}</p></li>
					    			<li class="more"><div><span>更多</span></div></li>
					    		</ul>
					    	</div>
					    	<div class="focus_con">
					    		<img src="../../static/img/noneirong_v1.png" />
					    		<p>您关注的用户还没有发布内容哦</p>
					    		<button @click="more">发现更优质内容</button>
					    	</div>
				    	</div>
				    </swiper-slide>
				</swiper>
			</div>
		</div>
		<div class="add_article" @click="add_article"></div>
		<transition name="slide-right"><router-view class="focus"/></transition>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { mapState , mapMutations } from 'vuex' 
	import listRec from '@/components/list-rec.vue'
	export default {
		name : 'trends',
		data (){
			return{
				tabs :['推荐','生活号','关注'],
				index : 1,
				more_flag : true,
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
			const scroll = new BScroll('.wrapper',{
				click : true
			})
			this.swiper.slideTo(1,0)
		},
		methods:{
			changeTabs(i){
				this.index = i
				this.swiper.slideTo(i)
			},
			...mapMutations(['toLoginShow']),
			add_article(){
				if(!this.isLogin){
					this.toLoginShow()
				}else{
					
				}
			},
			toStudy(){
				if(!this.isLogin){
					this.toLoginShow()
				}else{
					
				}
			},
			more(){
				this.swiper.slideTo(1)
			},
			toInfoPath(i){
				this.$router.push({path:'/trends/' + this.orders[i].infoPath})
			}
		},
		computed : {
			...mapState(['tab1_list','tab2_list','isLogin','toLogin','orders','tab1_list_add']),
			swiper() {
		        return this.$refs.mySwiper.swiper
		    }
		},
		components :{
			listRec
		}
	}
</script>

<style lang="less" scoped>
.trends{
	.header{
		background : #0EA15F;
		.left{
			display: flex;
			li{
				line-height: 1.0625rem;
				padding: 0 0.3125rem;
				color: #ffffff;
				font-size: 0.4375rem;
				opacity: 0.5;
			}
			li.active{
				opacity: 1;
			}
			li.active:after{
				content: "";
				display: block;
				width: 100%;
				background: #FFFFFF;
				height: 0.0625rem;
			}
		}
		.right{
			display: flex;
			li{
				width: 0.875rem;
				height: 0.875rem;
				margin: 0.09375rem 0.25rem;
				img{
					width: 100%;
				}
			}
		}
	}
		.tab1_head{
			background: #0EA15F;
			padding: 0.25rem;
			color: white;
			h1{
				font-size: 0.5rem;
				padding-left: 0.3125rem;
				a{
					color: #FFFFFF;
					font-size: 0.375rem;
					float: right;
					img{
						width: 0.25rem;
						vertical-align: -0.09375rem;
						margin-left: 0.25rem;
					}
				}
			}
			.input{
				background: white;
				width: 100%;
				padding: 0.3125rem;
				border-radius: 0.125rem;
				margin-top: 0.3125rem;
				color: #666666;
				span{
					display: inline-block;
					color: #0EA15F;
					border: 0.03125rem solid #0EA15F;
					border-radius: 0.0625rem;
				}
			}
		}
		.tab1_list{
			img{
				width: 100%;
			}
		}
		.tab3{
			.hot{
				background: white;
				padding: 0.3125rem;
				flex-shrink: 0;
				margin-bottom: 0.3125rem;
				ul{
					display: flex;
					flex-flow: wrap;
					li{
						width: 20%;
						text-align: center;
						padding: 0.3125rem 0;
						div{
							width: 1.25rem;
							height: 1.25rem;
							padding: 0.03125rem;
							border: 0.03125rem solid #D9D9D9;
							border-radius: 50%;
							margin: 0.3125rem auto;
							img{
								width: 100%;
								border-radius: 50%;
							}
							span{
								display: inline-block;
								width: 100%;
								height: 100%;
								border-radius: 50%;
								line-height: 1.125rem;
								color: white;
								background: #0EA15F;
							}
						}	
					}
				}
			}
			.focus_con{
				background: white;
				padding: 1.25rem 0;
				text-align: center;
				img{
					width: 25%;
				}
				p{
					color: #666;
				}
				button{
					width: 65%;
					line-height: 0.9375rem;
					margin-top: 0.625rem;
					border: none;
					background: #0EA15F;
					color: #FFFFFF;
					border-radius: 0.625rem;
				}
			}
		}
	.add_article{
		width: 1.875rem;
		height: 1.875rem;
		position: fixed;
		bottom: 1.5625rem;
		right: 0.3125rem;
		border-radius: 50%;
		background: url(../../static/img/publishfeelings_add.png);
		background-size: cover;
	}
}

</style>