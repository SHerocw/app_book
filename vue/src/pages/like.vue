<template>
<div class="like common">
	<div class="header">
		<h1>我的课程</h1>
		<button class="reorder" @click="reorder">排序</button>
		<button class="delete" v-if="!lessonflag" @click="deleteit"><i class="fa fa-trash"></i></button>
	</div>
	<div class="option">
		<div class="mylesson" :class="{active:lessonflag}" @click="toggleLesson">我的课程 <i class="fa fa-angle-down"></i></div>
		<div class="likelist" :class="{active:!lessonflag}" @click="toggleLike">收藏列表 <i class="fa fa-angle-down"></i></div>
	</div>
	<div class="wrapper">
		<ul class="lesinfo" v-if="lessonflag">
			<slide-list v-for="(i,index) in mylessonInfo" :data="{data : i, list : likeLesson}" :key="index" :iswidth="iswidth" :lessonflag="lessonflag"></slide-list>
		</ul>
		<ul class="lesinfo" v-if="!lessonflag">
			<slide-list v-for="(i,index) in likeLesson" :data="{data : i, list : likeLesson}"  :key="index" :iswidth="iswidth" :lessonflag="lessonflag" :dewidth="dewidth"></slide-list>
		</ul>
	</div>
</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import slideList from '@/components/slide_list.vue';
	import { mapState } from 'vuex'
	export default {
		name : 'like',
		data(){
			return{
				lessonflag : true,
				iswidth :true,
				dewidth : true
			}
		},
		computed : {
		   	...mapState(['mylessonInfo','likeLesson'])
		},
		methods : {
			toggleLesson(){
				this.lessonflag = true;
			},
			toggleLike(){
				this.lessonflag = false;
			},
			reorder(){
				this.iswidth = !this.iswidth
				this.dewidth = true
			},
			deleteit(){
				this.dewidth = !this.dewidth
				this.iswidth = true
			}
		},
		mounted(){
			new BScroll('.wrapper',{
		   		click : true,
		   		pullUpLoad : true
		   	})
		},
		components : {
		    slideList
		}
	}
</script>

<style>
	.header h1{
		font-size: 0.5rem;
		line-height: 0.9375rem;
		margin: auto;
	}
	.header button{
		position: absolute;
		top: 0.15625rem;
		border: none;
		padding: 0 0.3125rem;
		background: #f8f8f8;height: 0.9375rem;
	}
	.header .reorder{
		right: 0.3125rem;
	}
	.header .delete{
		left: 0.3125rem;
		font-size: 0.5625rem;
	}
	.active{
		color: #42B983;
	}
	.mylesson{
		border-right: 0.03125rem solid #c0c0c0;
	}
	.lesinfo i{
		flex-shrink: 0;
		line-height: 2.5rem;
		font-size: 0.625rem;
		text-align: center;
		width: 0;
		overflow: hidden; 
		transition: all .5s;
	}
	.lesinfo i:first-child{
		color: red;
	}
	.lesinfo i:last-child{
		color: #666;
	}
	.lesinfo i.swidth{
		width: 0;
	}
	.lesinfo i.lwidth{
		width: 1.6rem;
	}
	.lesinfo li{
		height: 3.03125rem;
		border-bottom: 0.03125rem solid #C0C0C0;
		position: relative;
	}
	.lesinfo li>.les_main{
		display: flex;
		padding: 0.25rem;
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 1;
		background: white;
	}
	.lesinfo li>.les_main>div{
		flex-grow: 1;
	}
	.les_swi{
		position: absolute;
		right: 0;
		top: 0;
	}
	.les_swi button{
		width: 1.875rem;
		height: 100%;
		line-height: 3rem;
		border: none;
	}
	.les_swi button:first-child{
		background: #F8F8F8;
	}
	.les_swi button:last-child{
		background: #42B983;
		color: white;
	}
</style>