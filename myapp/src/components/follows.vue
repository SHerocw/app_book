<template>
<li>
	<div class="img">
		<img :src="data.face" class="face"/>
		<i v-if="hasGrade"><img :src="src"/></i>
	</div>
	<div class="text">
		<h1>{{data.nickName}}</h1>
		<p>{{data.sign}}</p>
	</div>
	<div class="tofocus" @click="focus" :class="{'focused' : isFocus}"><span v-if="!isFocus">关注</span><span v-if="isFocus">已关注</span></div>
</li>
</template>

<script>
	export default{
		name : 'follows',
		props : ['data'],
		data(){
			return{
				isFocus : false,
				hasGrade : true,
				src : ''
			}
		},
		methods : {
			focus(){
				this.isFocus = !this.isFocus
			},
			toGrade(num){
				if(num > 0){
					this.hasGrade = true;
					this.src = './static/img/grade_v' + num + '.png'
				}else{
					this.hasGrade = false
				}
			}
		},
		mounted(){
			this.toGrade(this.data.grade)
		}
	}
</script>

<style scoped lang="less">
li{
	width: 100%;
	padding: 0.3125rem;
	background: white;
	border-bottom: 0.03125rem solid #EEEEEE;
	align-items: center;
	display: flex;
	.img{
		position: relative;
		flex-shrink: 0;
		.face{
			width: 1.5625rem;
			height: 1.5625rem;
			border-radius: 50%;
			margin-right: 0.3125rem;
		}
		i{
			position: absolute;
			right: 0.125rem;
			bottom: 0.125rem;
			width: 0.5rem;
			height: 0.5rem;
			img{
				width: 100%;
			}
		}
	}
	.text{
		flex-grow: 1;
		h1{
			font-weight: bold;
			font-size: 0.4375rem;
			margin-bottom: 0.15625rem;
		}
	}
	.tofocus{
		width: 1.875rem;
		height: 0.8125rem;
		text-align: center;
		border: 0.03125rem solid #0EA15F;
		color: #0EA15F;
		line-height: 0.8125rem;
		border-radius: 0.125rem;
		margin-left: 0.46875rem;
		transition: all .3s;
	}
	.focused{
		color: #666;
		background: #ccc;
		border: none;
	}
}
</style>