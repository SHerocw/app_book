<template>
	<div class="wrapper" ref="wrapper">
		<div class="wrap">
			<slot></slot>

			<div class="loading" v-if="isLoading"><i class="fa fa-spinner fa-spin"></i></div>
		</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll';
	export default {
		name : 'wrapper',
		props : ['pullUp'],
		data (){
			return {
				isLoading : false
			}
		},
		methods : {
			initScroll (){
				this.scroll = new BScroll(this.$refs.wrapper,{
					click : true,
					pullUpLoad : {
						threshold : -30
					}
				})
				this.scroll.scrollTo(0,-52)
			},
		},
		mounted (){
			var _this = this;
			this.initScroll()
			if(this.pullUp){
				this.scroll.on('pullingUp', (pos) => {
					if(this.pullUp.arr.length){
						_this.isLoading = true;
						setTimeout(function(){
							_this.isLoading = false;
							var arr = _this.pullUp.arr.splice(0,5);
							_this.$store.commit(_this.pullUp.commit,arr);
							_this.scroll.finishPullUp(); // 终止加载
							_this.scroll.refresh();
						},500)
					}
				})
			}
		}
	}
</script>
<style scoped lang="less">
	.wrapper{
		width:100%;
		height:100%;
		overflow:hidden;

		.loading{
			text-align: center;
			font-size:0.64rem;
		}
	}
</style>