<template>
	<div class="container" style="padding:0">
		<div class="title">
			<div class="left">
				<i class="fa fa-angle-left" @click="back"></i>
			</div>
			<h3>{{$route.params.type}}</h3>
		</div>
		<div class="main">
			<div class="wrapper" ref="wrapper">
				<div class="wrap">
					<div class="search">
						搜索
						<p><i class="fa fa-search"></i></p>
					</div>

					<div class="swiper-container banner">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="(banner,index) in banners" :key="index">
								<img :src="banner.pic" alt="">
								<div class="text">{{banner.text}}</div>
							</div>
						</div>
						<div class="swiper-pagination"></div>
					</div>
					
					<div class="regional-news">
						<div class="main-title">
							<router-link to=""><i class="fa fa-map-marker"></i> 河南 <i class="fa fa-angle-right"></i></router-link>
						</div>
						<div class="swiper-container regional-news-main">
							<div class="swiper-wrapper">
								<div class="swiper-slide" v-for="(news,index) in regionalNews" :key="index">
									<div class="col" v-for="item in news">
										<router-link :to="{name : 'article',params : {id : index}}">
											<img :src="item.pic" alt="">
											<div class="text">{{item.text}}</div>
										</router-link>
									</div>
								</div>
							</div>
						</div>
						<div class="pagination">
							<span v-for="(i,index) in regionalNews.length" :class="{cur : active == index}"></span>
						</div>
					</div>
					<news :news-data="activityArr"></news>
					<div class="loading" v-if="isLoading"><i class="fa fa-spinner fa-spin"></i></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll';
	import Swiper from 'swiper';
	import { mapState } from 'vuex';
	import news from '@/components/newsList';
	export default {
		name : 'activity',
		data (){
			return {
				banners : [{
					pic : './static/img/slideimage01.png',
					text : '福建武平：艺术装点美丽乡村 3D墙绘'
				},{
					pic : './static/img/slideimage02.png',
					text : '铁壁传神————郭氏铁板浮雕制作技艺'
				},{
					pic : './static/img/slideimage03.png',
					text : '我为美食点赞：用味蕾感受美好生活！'
				}],
				regionalNews : [
					[{
						pic : './static/img/adam.jpg',
						text : '新郑：首届白居易诗歌文化周开幕'
					},{
						pic : './static/img/ben.png',
						text : '许昌：新春庙会年味儿足'
					}],[{
						pic : './static/img/max.png',
						text : '新郑：首届白居易诗歌文化周开幕'
					},{
						pic : './static/img/mike.png',
						text : '许昌：新春庙会年味儿足'
					}],[{
						pic : './static/img/perry.png',
						text : '新郑：首届白居易诗歌文化周开幕'
					},{
						pic : './static/img/ben.png',
						text : '许昌：新春庙会年味儿足'
					}],[{
						pic : './static/img/perry.png',
						text : '新郑：首届白居易诗歌文化周开幕'
					},{
						pic : './static/img/ben.png',
						text : '许昌：新春庙会年味儿足'
					}],[{
						pic : './static/img/mike.png',
						text : '新郑：首届白居易诗歌文化周开幕'
					},{
						pic : './static/img/ben.png',
						text : '许昌：新春庙会年味儿足'
					}]
				],
				active : 0,
				isLoading : false
			}
		},
		methods : {
			back(){
				this.$router.go(-1)
			},
			initScroll (){
				this.scroll = new BScroll(this.$refs.wrapper,{
					click : true,
					pullUpLoad : {
						threshold : -30
					}
				})
				this.scroll.scrollTo(0,-52)
			},
			loadData (){
				var arr = this.activityNews.splice(0,5);
				this.$store.commit('addActivityArr',arr);
			}
		},
		computed : {
			...mapState(['activityNews','activityArr'])
		},
		components : {
			news
		},
		mounted (){
			var _this = this;
			new Swiper('.banner',{
				loop : true,
				pagination: {
					el: '.swiper-pagination',
					type: 'fraction'
				},
			})
			new Swiper('.regional-news-main',{
				loop : true,
				on : {
					slideChangeTransitionEnd : function(){
						_this.active = this.realIndex;
					}
				}
			})

			this.initScroll();
			this.loadData();

			var _this = this;
			this.scroll.on('pullingUp', (pos) => {
				if(this.activityNews.length){
					_this.isLoading = true;
					setTimeout(function(){
						_this.isLoading = false;
						var arr = _this.activityNews.splice(0,5);
						_this.$store.commit('addActivityArr',arr);
						_this.scroll.finishPullUp(); // 终止加载
						_this.scroll.refresh();
					},500)
				}
			})
		}
	}
</script>
<style scoped lang="less">
	.title{
		width:100%;
		height:1.2rem;
		background:#49bdf0;
		color:#fff;
		text-align: center;
		line-height: 1.2rem;
		position:absolute;
		top:0;
		left:0;
		z-index:5;

		.left,.right{
			position:absolute;
			top:0;
			font-size:0.426667rem;
		}
		.left{
			left:10px;
		}
		.right{
			right:10px;
		}

		h3{
			font-family: '宋体';
			font-size:0.48rem;
		}
	}
	.main{
		width:100%;
		height:100%;
		padding-top:1.2rem;
		position:relative;

		.shade{
			width:100%;
			height:100%;
			background:rgba(0,0,0,0.6);
			position:absolute;
			top:0;
			z-index:3;
		}

		.select-address{
			width:100%;
			padding:0.4rem 0.32rem;
			position:absolute;
			top:1.2rem;
			background:#eee;
			z-index:4;

			.inner{
				background:#fff;
				padding:0.426667rem 0.426667rem;

				.fa-map-marker{
					color:#ccc;
					margin-right:0.266667rem;
				}

				span{
					float:right;
					color:#49bdf0;
				}
			}
		}

		.wrapper{
			width:100%;
			height:100%;
			overflow:hidden;

			.search{
				border:1px solid #d9d9d9;
				margin:0.133333rem;
				background:#fff;
				text-indent: 0.266667rem;
				line-height: 0.8rem;

				p{
					float:right;
					padding:0 0.133333rem;
				}
			}

			.banner{
				width:100%;

				img{
					width:100%;
					display:block;
				}

				.swiper-pagination{
					text-align: left;
					text-indent: 0.266667rem;
					color:#fff;
					bottom:0;
					line-height: 0.8rem;
				}

				.text{
					width:100%;
					height:0.8rem;
					line-height: 0.8rem;
					position:absolute;
					bottom:0;
					background:rgba(0,0,0,0.7);
					color:#fff;
					padding-left:1.333333rem;
				}
			}

			.activity-list{
				display:flex;
				justify-content: space-around;
				padding:0.4rem 0.213333rem;
				border-bottom:1px solid #ccc;
				background:#fff;

				.item{
					text-align:center;
					font-size:0.32rem;

					img{
						width:1.2rem;
						height:1.2rem;
						border-radius: 50%;
					}
				}
			}

			.regional-news{
				padding:0.32rem 0;
				background:#fff;

				.main-title{
					font-size:0.426667rem;
					padding:0 0.266667rem;
					margin-bottom:0.266667rem;

					a{
						color:#333;
					}

					.fa-map-marker{
						color:#49bdf0;
						margin-right:0.213333rem;
					}

					.fa-angle-right{
						float:right;
						margin-top:0.08rem;
					}
				}

				.regional-news-main{
					.swiper-slide{
						display:flex;
						padding:0 0.133333rem;

						.col{
							width:50%;
							height:3.733333rem;
							margin:0 0.08rem;
							position:relative;

							img{
								width:100%;
								height:100%;
							}

							.text{
								width:100%;
								position:absolute;
								bottom:0;
								left:0;
								background:rgba(0,0,0,0.5);
								color:#fff;
								padding:0.08rem 0.16rem;
							}
						}
					}
				}

				.pagination{
					margin-top:0.426667rem;
					text-align:center;

					span{
						display:inline-block;
						width:0.32rem;
						height:0.186667rem;
						background:#999;
						border-radius: 30px;
						margin:0 0.106667rem;
					}

					.cur{
						background:#49bdf0;
					}
				}
			}

			.loading{
				text-align: center;
				font-size:0.64rem;
			}
		}
	}
	
</style>