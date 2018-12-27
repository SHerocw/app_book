<template>
	<div class="find common">
		<div class="header">
			<img src="../../static/img/discover_daycheck.png" @click="todayShow"/>
			<span>发现</span>
			<router-link to="/search"><img src="../../static/img/udesk_ic_search.png" class="toSearch"/></router-link>
		</div>
		<div class="find_navs">
			<vue-tabbar-slide :options="options" @callback="callback"  ref="mySwiper1"></vue-tabbar-slide>
		</div>
		<div class="wrapper">
			<div class="content">
				<swiper :options="swiperOption" ref="mySwiper">
					<swiper-slide>
						<div class="turn">
							<swiper :options="swiperOptionx">
								<swiper-slide v-for="(i,index) in slides" :key="index"><div class="img_wrap"><img :src="i.src"/></div></swiper-slide>
								<div class="swiper-pagination"  slot="pagination"></div>
							</swiper>
						</div>
						<ul class="group">
							<li v-for="(v,i) in group" :key="i">
								<div class="gro_img"><img :src="v.icon"/></div>
								<p>{{v.name}}</p>
							</li>
						</ul>
						<div class="vip com2">
							<h1 class="title">会员特惠</h1>
							<div class="box">
								<div class="box_img">
									<img src="static/img/VIP.jpg"/>
								</div>
								<h4>一年优酷会员年费送！</h4>
								<p>奖学金天天领，一年最高可领365元</p>
							</div>
						</div>
						<div class="listen com2">
							<h1 class="title">有书每日听<span>{{week}}</span><i>听书区 ></i></h1>
							<div class="lis_book">
								<div class="lis_img">
									<img src="static/img/book.jpg"/>
								</div>
								<div class="lis_brief">
									<h5>记忆的性别</h5>
									<p>20世纪50年代的中国农村妇女，在她们身上，都经历了什么？</p>
									<div class="buy">
										<span>￥4.99</span>
										<b>购买</b>
									</div>
								</div>
							</div>
							<div class="order"><i></i>订阅有书年度VIP，海量图书免费听</div>
						</div>
						<div class="lesson com2">
							<h1 class="title">大咖讲堂</h1>
							<ul>
								<ver-rank v-for="(v,i) in lessons" :data="v" :key="i" :orderShow="true" :degreeShow="true"></ver-rank>
							</ul>
						</div>
						<div class="fortune com2">
							<h1 class="title">使用财富指南</h1>
							<ul>
								<hor-rank v-for="(v,i) in fortune" :key="i" :dataHor="v"></hor-rank>
							</ul>
						</div>
						<div class="ease com2">
							<h1 class="title">早安夜听<i>查看更多 ></i></h1>
							<ul>
								<li v-for="(v,i) in ease" :key="i"><i></i>{{v.text}}</li>
							</ul>
						</div>
						<div class="golook com2">
							<h1 class="title">有书快看<i>更多 ></i></h1>
							<div class="box">
								<div class="box_img">
									<img src="static/img/wed.jpg"/>
								</div>
								<h4>隐居瓦尔登湖畔是一种什么体验？</h4>
								<p>读本书，能引领人进入一个澄明、甜美、素雅的世界</p>
							</div>
							<ul>
								<hor-rank v-for="(v,i) in golook" :key="i" :dataHor="v" :presonShow="true" :presonShows="true"></hor-rank>
							</ul>
						</div>
						<div class="goodclass com2">
							<h1 class="title">精品小讲<i>更多 ></i></h1>
							<ul>
								<ver-rank v-for="(v,i) in goodclass" :data="v" :key="i" :priceShow="true" :orderShow="true" :degreeShow="true" :teaShow="true"></ver-rank>
							</ul>
						</div>
						<div class="only com2">
							<h1 class="title">有书独家</h1>
							<ul>
								<ver-rank v-for="(v,i) in only" :data="v" :key="i" :priceShow="true" :teaShow="true"></ver-rank>
							</ul>
						</div>
						<div class="subject com2">
							<h1 class="title">有书专题<i>更多 ></i></h1>
							<div class="box">
								<div class="box_img">
									<img src="static/img/gongdu(10).jpg"/>
								</div>
								<h4>40本书读懂中国人的心路历程</h4>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide v-for="(v,i) in nav_child" :key="i">
						<ul class="nav_child com2">
							<li v-for="(v,i) in nav_child[i].detail" :key="i" :class="{active:i == index}">{{v}}</li>
						</ul>
						<ul class="list">
							<hor-rank v-for="(v,i) in nav_child[i].item" :key="i" :dataHor="v" :presonShow="true" class="com2"></hor-rank>
						</ul>
					</swiper-slide>
				</swiper>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import verRank from '@/components/ver-rank.vue'
	import horRank from '@/components/hor-rank.vue'
	import { mapState , mapMutations , mapGetters} from 'vuex'
	export default{
		name : 'find',
		data(){
			return{
				index :0,
				week : new Date().getDay(),
				slides:[{
					links : '',
					src : './static/img/gongdu.jpg'
				},{
					links : '',
					src : './static/img/gongdu(5).jpg'
				},{
					links : '',
					src : './static/img/gongdu(6).jpg'
				},{
					links : '',
					src : './static/img/gongdu(4).jpg'
				}],
				options:{
					container: 'mySlide',
					slideData: [],
					slideId: [],
					index :0,
					width :'65px',
					color:'#aaa',
					checkedColor:'black',
					downLineHeight :'3px',
					downLineColor :'#0EA15F'
				},
				swiperOption:{
					resistanceRatio: 0,
					autoHeight: true,
					on:{
						slideChange:() => {
							let swiper = this.$refs.mySwiper.swiper;
							this.options.index = swiper.activeIndex
						}
					}
				},
				swiperOptionx:{
					autoplay :{
						delay : 2000
					},
					pagination :{
						el :'.swiper-pagination'
					},
					loop :true,
					speed : 1000
				},
				group:[{
					icon : './static/img/vip_v2.png',
					name : '有书VIP'
				},{
					icon : './static/img/yousheng_v2.png',
					name : '有声书'
				},{
					icon : './static/img/dianzishu_v2.png',
					name : '电子书'
				},{
					icon : './static/img/zhibo_v2.png',
					name : '直播'
				},{
					icon : './static/img/xiaozu_v2.png',
					name : '小组'
				}]
			}
		},
		methods:{
			callback (event, index, val, id) {
	          	this.swiper.slideTo(index)
	     },
	     	...mapMutations(['todayShow'])
		},
		mounted(){
			this.week = this.toWeekUpper(new Date().getDay())
			this.options.slideData = ['推荐','职场','财经','生活','英语','心理','文史','国学','亲子']
          	this.options.slideId =['1','2','3','4','5','6','7','8','9']
			const scroll = new BScroll('.wrapper',{
				click : true
			})
		},
		computed:{
			...mapState(['lessons','fortune','ease','golook','goodclass','only','nav_child','showToday']),
			...mapGetters(['toWeekUpper']),
			swiper() {
		        return this.$refs.mySwiper.swiper
		    }
		},
		components:{
			verRank,
			horRank
		}
	}
</script>

<style scoped lang="less">
.find{
	position: relative;
	.header{
		border-bottom: 0.03125rem solid #D9D9D9;
		background: #f5f5f5;
		img{
			width: 0.625rem;
			height: 0.625rem;
		}
		.toSearch{
			width: 0.875rem;
			height: 0.875rem;
			margin-top: 0.3125rem;
		}
		span{
			font-size: 0.5625rem;
		}
	}
	.content{
		.turn{
			background: #FFFFFF;
			padding: 0.46875rem;
			.img_wrap{
				width: 100%;
				height: 4.6875rem;
				overflow:hidden;
				img{
					width: 100%;
					position: absolute;
					top: -20px;
				}
			}
			.swiper-pagination{
				width: 20%;
				left: 50%;
				height: 0.3125rem;
				margin-left: -10%;
				background: rgba(0,0,0,.3);
				border-radius: 0.3125rem;
				text-align: center;
				padding: 0;
			}	
		}
		.group{
			display: flex;
			justify-content: space-around;
			background: white;
			padding-bottom: 0.625rem;
			text-align: center;
			margin-bottom: 0.3125rem;
			.gro_img{
				display: inline-block;
				width: 0.9375rem;
				img{
					width: 100%;
				}
			}
		}
		.box{
			padding-bottom: 0.625rem;
			margin-bottom: 0.625rem;
			box-shadow: 0 5px 10px #D9D9D9;	
			.box_img{
				height: 3.75rem;
				background-size: 100% auto;
				position: relative;
				overflow: hidden;
				img{
					width: 100%;
					position: absolute;
				}
			}
			h4{
				font-size: 0.46875rem;
				margin: 0.3125rem;
				font-weight: bold;
			}
			p{
				margin: 0 0.3125rem 0.3125rem;
			}
		}
		.listen{
			.lis_book{
				padding: 0.3125rem 0;
				display: flex;
				.lis_img{
					width: 25%;
					margin-right: 0.46875rem;
					img{
						width: 100%;
					}
				}
				.lis_brief{
					flex-grow: 1;
					h5{
						font-weight: bold;
						margin-bottom: 0.25rem;
					}
					.buy{
						margin-top: 0.625rem;
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						span{
							color: #efa454;
						}
						b{
							display: inline-block;
							padding: 0.15625rem 0.46875rem;
							background: #EFA454;
							color: #FFFFFF;
							border-radius: 0.625rem;
						}
					}
				}
			}
			.order{
				width: 100%;
				text-align: center;
				margin-top: 0.46875rem;
				background: #f6f2e8;
				padding: 0.1875rem 0;
				border-radius: 0.625rem;
				i{
					display: inline-block;
					width: 0.78125rem;
					height: 0.5625rem;
					background: url(../../static/img/vip_xiao.png);
					background-size: cover;
					margin-right: 0.3125rem;
					vertical-align: middle;
				}
			}
		}
		h1{
			font-size: 0.5rem;
			font-weight: bold;
			padding: 0.3125rem 0;
			position: relative;
			span{
				margin-left: 0.3125rem;
				font-weight: lighter;
				font-size: 0.40625rem;
			}
			i{
				position: absolute;
				right: 0;
				font-style: normal;
				font-size: 0.375rem;
				font-weight: lighter;
			}
		}
		.lesson{
			ul{
				display: flex;
				flex-flow: wrap;
			}
		}
		.ease{
			li{
				padding: 0.15625rem 0;
				white-space: nowrap;
				i{
					display: inline-block;
					width: 0.525rem;
					height: 0.525rem;
					background: url(../../static/img/icon_bofang1.png);
					background-size: cover;
					vertical-align: middle;
					margin-right: 0.3125rem;
				}
			}
		}
		.goodclass,.only{
			ul{
				display: flex;
			}
		}
		.guesslike{
			text-align: center;
			i{
				padding-left: 0.625rem;
				background: url(../../static/img/change_v2.png) no-repeat left center;
				background-size: auto 100%;
			}
			span{
				display: inline-block;
				width: 80%;
				height: 1.25rem;
				line-height: 1.25rem;
				background: #E9F2EF;
				color: #0EA15F;
				font-size: 0.46875rem;
				border-radius: 0.625rem;
			}
		}
	}
	.nav_child{
		display: flex;
		flex-flow: wrap;
		li{
			font-weight: bold;
			padding: 0.125rem 0.35675rem;
			font-size: 0.40625rem;
			background: #ececec;
			margin: 0.1275rem;
			border-radius: 0.5625rem;
		}
		li.active{
			background: #0EA15F;
			color: white;
		}
	}
	.list{
		li{
			margin-bottom: 0.25rem;
		}
	}
}
</style>