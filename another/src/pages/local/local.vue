<template>
	<div class="container">
		<div class="swiper-container top-nav" ref="topNav">
		  <div class="swiper-wrapper">
		    <div class="swiper-slide" v-for="text in navData">{{text}}</div>
		  </div>
		</div>
		<div class="swiper-container swiperMain" ref="swiperMain">
		  <div class="swiper-wrapper">
		    <div class="swiper-slide" v-for="row in swiperSlide">
				<div class="wrapper" ref="wrapper">
					<div class="wrap">
						<p v-for="col in row" @load="refresh">{{col}}</p>
					</div>
				</div>
		    </div>
		  </div>
		</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	import Swiper from 'swiper'
	export default {
		name : 'local',
		data (){
			return {
				navData : ['郑州','焦作','洛阳','开封','周口','商丘','南阳'],
				btscrollArr : []
			}
		},
		methods : {
			refresh (){
				
			}
		},
		computed : {
			swiperSlide (){
				return this.$store.state.local
			}
		},
		mounted (){
			this.$refs.wrapper.forEach((v,i) => {
				var bscroll = new BScroll(v,{
					click : true
				})
				window.addEventListener('load',function(){
					bscroll.refresh();
				})
			})

			var topNav = new Swiper(this.$refs.topNav,{
				freeMode : true,
				slidesPerView : 5,
				watchSlidesVisibility: true
			})
			var swiperMain = new Swiper(this.$refs.swiperMain,{
				thumbs : {
					swiper : topNav,
					slideThumbActiveClass : 'cur'
				}
			})
		}
	}
</script>
<style scoped lang="less">
	.top-nav{
		width:100%;
		height:1.28rem;
		line-height: 1.28rem;
		background:#49bdf0;
		color:#fff;
		text-align:center;
		position:absolute;
		z-index:2;

		.cur{
			background:#66b3ff;
		}
	}

	.swiperMain{
		height:100%;
		padding-top:1.28rem;

		.wrapper{
			height:100%;
			padding:0 0.32rem;
			overflow:hidden;	
		}
	}
	
</style>