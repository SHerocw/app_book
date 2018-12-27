<template>
<transition name="slide-right">
	<div class="authorInfo">
		<div class="header" :class="{show : headshow}">
			<router-link to="/trends"><img src="../../static/img/title_jiantou_left_gray.png" class="back"/></router-link>
			<span>{{nickname}}</span>
			<router-link to="/search"><img src="../../static/img/search_black_v1.png" class="search"/></router-link>
		</div>
		<div class="fixTrendHead" :class="{tabshow : tabshow}" v-if="!someshow">
			<span :class="{active:tabCha}" @click="chaTab1">动态</span><span :class="{active:!tabCha}" @click="chaTab2">书房</span><i :class="{active:!tabCha}"></i>
		</div>
		<div class="wrapper" ref="wrap">
			<div class="content">
				<div class="top">
					<div class="header">
						<router-link to="/trends"><img src="../../static/img/title_jiantou_left_white.png" class="back"/></router-link>
						<router-link to="/search"><img src="../../static/img/search_white_v1.png" class="search"/></router-link>
					</div>
				</div>
				<div class="baseInfo">
					<div class="face"><img :src="face" /></div>
					<h1>{{nickname}} </h1>
					<h5 v-if="someshow">{{degree}}</h5>
					<p>{{design}}<i class="arrow_right"></i></p>
					<div class="folAfan">
						<li v-if="someshow"><b>{{order}}</b><span>订阅</span></li>
						<li v-if="!someshow"><b>{{follow}}</b><span>关注</span></li>
						<li><b>{{fans}}</b><span>粉丝</span></li>
						<li v-if="someshow"><b>{{like}}</b><span>点赞</span></li>
					</div>
					<div class="folAsha">
						<button>关注</button><button>分享主页</button>
					</div>
				</div>
				<div class="trend">
					<div class="trend_head">
						<span :class="{active:tabCha}" @click="chaTab1">动态</span><span :class="{active:!tabCha}" @click="chaTab2" v-if="!someshow">书房</span><i :class="{active:!tabCha}"></i>
					</div>
					<div class="trends" v-if="tabCha">
						<list-rec v-for="(i,index) in trends" :data="i" :key="index"></list-rec>
					</div>
					<div class="books" v-if="!tabCha">
						<li v-for="(v,i) in book" :key="i">
							<h1>{{v.title}}</h1>
							<p>{{v.all}}本丨{{v.coll}}人已收藏</p>
							<div><img :src="v.bg"/></div>
						</li>
					</div>
				</div>
				<div class="hint">没有更多了</div>
			</div>
		</div>	
	</div>
</transition>
</template>

<script>
	import BScroll from 'better-scroll'
	import { mapState , mapMutations } from 'vuex'
	import listRec from '@/components/list-rec.vue'
	export default{
		name : 'authorInfo',
		data(){
			return{
				tabCha :true,
				nickname : '',
				face : '',
				design :'',
				degree : '',
				order : 0,
				follow : 0,
				fans : 0,
				like : 0,
				trends : [],
				headshow : true,
				tabshow : true,
				someshow : true,
				book : [{
					title : '想读的书',
					bg : './static/img/f_zero.png'
				},{
					title : '有书高校',
					bg : './static/img/f_one.png'
				},{
					title : '有声书',
					bg : './static/img/f_two.png'
				},{
					title : '童伴有书',
					bg : './static/img/f_three.png'
				},{
					title : '已读的书',
					bg : './static/img/f_fore.png'
				}]
			}
		},
		mounted(){
			this.someshow = this.$route.path.substr(this.$route.path.lastIndexOf('/')+1,1) == 'a' ? false : true;
			this.tab1_list.concat(this.tab2_list,this.orders).forEach((v,i) => {
				if(this.$route.params.tokenId == v.infoPath){
					this.nickname = v.nickname;
					this.face = v.face;
					this.degree = v.info.degree;
					this.design = v.info.design;
					this.doder = v.info.order;
					this.follow = v.info.follow;
					this.fans = v.info.fans;
					this.like = v.info.like;
					this.trends = v.info.trends;
					if(v.info.room){
						v.info.room.forEach((e,j) => {
							this.book[j] = Object.assign(this.book[j],e)
						})
					}	
				}
			});
			const scroll = new BScroll(this.$refs.wrap,{
				click : true,
				bounce : false,
				probeType : 1
			});
			scroll.on('scroll',(e) => {
				if(e.y < -200){
					this.headshow = false
				}else{
					this.headshow = true
				}
				if(e.y < -340){
					this.tabshow = false
				}else{
					this.tabshow = true
				}
			})
		},
		methods :{
			chaTab1(){
				this.tabCha = true
			},
			chaTab2(){
				this.tabCha = false
			},
		},
		computed : {
			...mapState(['tab1_list','tab2_list','orders'])
		},
		components :{
			listRec
		}
	}
</script>

<style scoped lang="less">
.authorInfo{
	background: #EEEEEE;
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	.wrapper{
		flex-grow: 1;
	}
	.header{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		transition: opacity 0.5s;
		background: white;
		span{
			font-size: 0.5625rem;
			font-weight: bold;
		}
		.search{
			margin-top: 0.3125rem;
			width: 0.78125rem;
			height: 0.78125rem;
		}
		.back{
			width: 0.5rem;
			height: 0.5rem;
		}
	}
	.header.show{
		opacity: 0;
		height: 0;
		padding: 0;
	}
	.fixTrendHead{
		width: 100%;
		background: #FFFFFF;
		position: fixed;
		top: 1.5625rem;
		left: 0;
		z-index: 99;
		transition: opacity 0.5s;
	}
	.tabshow{
		opacity: 0;
		height: 0;
		padding: 0;
		z-index: -1;
	}
	.top{
		height: 5rem;
		background: url(../../static/img/timg.jpg) center center;
		background-size: auto 200%;
		.header{
			position: static;
			background: transparent;
		}	
	}
	.baseInfo{
		background: white;
		text-align: center;
		padding-top: 1.25rem;
		margin-bottom: 0.3125rem;
		position: relative;
		.face{
			width: 1.875rem;	
			height: 1.875rem;
			border: 0.0625rem solid #FFFFFF;
			border-radius: 50%;
			position: absolute;
			top: -0.9375rem;
			margin-left: -0.9375rem;
			left: 50%;
			img{
				width: 100%;
				border-radius: 50%;
			}
		}
		h1{
			font-weight: bold;
			font-size: 0.625rem;
		}
		h5{
			color: #EFA454;
			margin-top: 0.3125rem;
		}
		p{
			color: #666;
			margin: 0.3125rem 0;
			i{
				float: right;
			}
		}
		.folAfan{
			padding: 0 0.625rem;
			display: flex;
			justify-content: space-around;
			li{
				b{
					display: block;
					font-size: 0.5rem;
					margin-bottom: 0.3125rem;
				}
				span{
					color: #666666;
				}
			}	
		}
		.folAsha{
			display: flex;
			justify-content: space-around;
			padding: 0.625rem 0;
			button{
				width: 40%;
				height: 1.25rem;
				border-radius: 0.625rem;
				border: none;
				font-weight: bold;
				font-size: 0.46875rem;
			}
			button:first-child{
				background: #e9f2ef;
				color: #0EA15F;
			}
			button:last-child{
				background: #0EA15F;
				color: white;
			}
		}
	}
	.trend_head,.fixTrendHead{
		padding-bottom: 0.625rem;
		background: #FFFFFF;
		span{
			display: inline-block;
			padding: 0.3125rem 0.625rem;
			font-size: 0.46875rem;
			font-weight: bold;
		}
		span.active{
			color: #0EA15F;
		}
		i{
			display: block;
			width: 1.25rem;
			height: 0.0625rem;
			background: #0EA15F;
			margin-left: 0.46875rem;
			transition: all .5s;
		}
		i.active{
			margin-left: 2.65625rem;
		}
	}	
	.books{
		padding: 0.625rem;
		background: white;
		display: flex;
		flex-flow: wrap;
		li{
			width: 50%;
			margin-bottom: 0.46875rem;
			text-align: center;
			h1{
				font-weight: bold;
				font-size: 0.46875rem;
				margin: 0.15625rem;
			}
			div{
				margin: 0.46875rem 0;
				img{
					width: 70%;
				}
			}
		}
	}	
	.hint{
		text-align: center;
		padding-bottom: 0.46875rem;
		background: #FFFFFF;
		color: #666666;
	}
}
</style>