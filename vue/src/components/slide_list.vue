<template>
	<li>
		<div class="les_main" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" :style="{'left':left}">
			<i class="fa fa-minus-circle" :class="{'swidth':dewidth,'lwidth':!dewidth}" v-if="!lessonflag" @click="remove"></i>
			<img :src="data.data.face"/>
			<div>
				<h2>{{data.data.name}}</h2>
				<p>{{data.data.subject}}</p>
				<p>{{data.data.price}}</p>
			</div>
			<i class="fa fa-reorder" :class="{'swidth':iswidth,'lwidth':!iswidth}"></i>
		</div>
		<div class="les_swi" ref="theBtn">
			<button @click="collect" v-if="lessonflag">收藏</button>
			<button>分享</button>
		</div>
	</li>
</template>

<script>
	import { mapState } from 'vuex'
	export default{
		name : 'slide_list',
		props : ['data','iswidth','lessonflag','dewidth'],
		data(){
			return{
				startX : 0,
				left:0
			}
		},
		computed : {
			...mapState(['likeLesson'])
		},
		methods : {
			touchStart(e){
				this.startX = e.touches[0].pageX
			},
			touchMove(e){
				var num = e.touches[0].pageX - this.startX
				var offsetWidth = this.$refs.theBtn.offsetWidth;
				if(num < -offsetWidth){
					this.left = -offsetWidth + num/10 +'px'
				}else if(num > 0){
					this.left = 0
				}else{
					this.left = num +'px'
				}
			},
			touchEnd(e){
				var num = e.changedTouches[0].pageX - this.startX;
				if(-num <= this.$refs.theBtn.offsetWidth / 2){
					this.left = 0
				}else{
					this.left = -this.$refs.theBtn.offsetWidth +'px';
				}
			},
			collect(){
				if(this.likeLesson.indexOf(this.data.data) == -1){
					this.likeLesson.push(this.data.data)
				}
				this.left = 0
			},
			remove(){
				this.likeLesson.pop(this.data.data)
			}
		},
		mounted(){
			this.$emit('go-collect',this.likeLesson);
		}
	}
</script>

<style scoped>
</style>