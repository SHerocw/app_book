<template>
	<div class="home common">
		<div class="header">
			<img src="../assets/logo.png"/>
			<input type="text" placeholder="Search…"/>
			<i class="fa fa-search"></i>
		</div>
		
		<div class="wrapper">
			<div class="content">
				<div class="banner">
					 <swiper :options="swiperOption">
			      <swiper-slide><img src="../assets/slideimage01.png"></swiper-slide>
			      <swiper-slide><img src="../assets/slideimage02.png"></swiper-slide>
			      <swiper-slide><img src="../assets/slideimage03.png"></swiper-slide>
			     <div class="swiper-pagination" slot="pagination"></div>
			   </swiper>
				</div>
				<div class="comment con">
					<h1 class="title">好评榜</h1>
					<ul>
						<li v-for="i in commentArr">
							<img :src="i.src"/>
							<h4>{{i.title}}</h4>
							<p>{{i.content}}</p>
						</li>
					</ul>
				</div>
				<div class="newLesson con">
					<h1 class="title">最新课程
						<span>更多<i class="fa fa-angle-right"></i></span>
					</h1>
					<ul>
						<li v-for="i in lessonArr">
							<img :src="i.src"/>
							<h4>{{i.title}}</h4>
							<p>{{i.content}}</p>
						</li>
					</ul>
				</div>
				<div class="guessLike">
					<h1 class="title">猜你喜欢</h1>
					<ul>
						<li v-for="i in lessonArr">
							<img :src="i.src"/>
							<div>
								<h4>{{i.title}}</h4>
								<p>{{i.content}}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
				
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapState } from 'vuex'
export default {
  name: 'home',
 data() {
      return {
        swiperOption:{
        	autoplay: {
        		delay : 3000
        	},
      		speed: 500,
      		loop:true,
      		pagination: {
      			el : '.swiper-pagination',
      		}
        },
      }
   },
   computed : {
   	...mapState(['commentArr','lessonArr'])
   },
   mounted(){
   	const scroll = new BScroll('.wrapper',{
   		click : true
   	})
   },
   components : {
   	swiper,
    swiperSlide
   }
}
</script>

<style scoped>
.header img{
	width: 0.9375rem;
	height: 0.9375rem;
	border-radius: 50%;
}
.header input{
	width: 70%;
	margin: 0 5px;
	border-radius: 0.125rem;
	border: 1px solid #ccc;
	height: 0.9375rem;
}
.header i{
	text-align: center;
	line-height: 0.9375rem;
	font-size: 0.5625rem;
	background: #f1f1f1;
	flex-grow: 1;	
	border-radius: 0.125rem;
	height: 0.9375rem;
}
.banner img{
	width: 100%;
}
.title{
	border-top: 0.03125rem solid #ddd;
	border-bottom: 0.03125rem solid #ddd;
	line-height: 1.5625rem;
	padding-left: 0.625rem;
	font-size: 0.5rem;
	color: #444;
	position: relative;
}
.con ul{
	padding: 0.15625rem;
	display: flex;
	flex-wrap: wrap;
}
.box{
	height: 6.25rem;
}
.con li{
	width: 50%;
	padding: 0.15625rem;
}
.con li img{
	width: 100%;
}
.con h4,.guessLike h4{
	font-size: 0.5rem;
}
.con p,.guessLike p{
	font-size: 0.4375rem;
	color: #666;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.newLesson span{
	position: absolute;
	right: 0.3125rem;
}
.newLesson i{
	font-size: 0.625rem;
	margin-left: 0.3125rem;
}
.guessLike li{
	display: flex;
	padding: 0.3125rem;
	border-bottom: 0.03125rem solid #ddd;
}
.guessLike li img{
	width: 2.5rem;
	height: 2.5rem;
	margin-right: 0.625rem;
}
</style>
