<template>
<transition name="slide-right">
<div class="gift">
	<div class="header">
		<img src="../../static/img/title_jiantou_left_gray.png" @click="back"/>
		<span>新人礼包</span>
		<b></b>
	</div>
	<ul>
		<li v-for="(v,i) in gifts" :key="i">
			<img :src="v.img"/>
			<div class="text">
				<h1>{{v.title}}</h1>
				<p>{{v.brief}}</p>
			</div>
		</li>
	</ul>
	<div class="word">
		<span>小小礼物，不成敬意</span>
		<p>愿以后的每一天</p>
		<b>都有书相伴</b>
	</div>
	<div class="bottom">
		<router-link to="/login"><button>立即注册领取礼包</button></router-link>
	</div>
</div>
</transition>
</template>

<script>
	export default{
		name : 'gift',
		data(){
			return{
				backPath : '',
				gifts : [{
					img : './static/img/pic_tingshuvip.png',
					title : '7天听书VIP',
					brief : '领取后可在7天内免费畅听[365听书]区'
				},{
					img : './static/img/pic_jinpikec.png',
					title : '2门精品课程',
					brief : '领取后可在[学习]或[我的]页面进行学习'
				},{
					img : './static/img/pic_youshudou.png',
					title : '2000有书豆',
					brief : '价值20元，可用于购买付费课程时进行抵扣'
				}]
			}
		},
		methods : {
			back(){
				history.go(-1)
			}
		}
	}
</script>

<style lang="less" scoped>
.gift{
	position: absolute;
	width: 100%;
	flex-grow: 1;
	.header{
		background: white;
		font-size: 0.46875rem;
		font-weight: bold;
		border-bottom: 0.03125rem solid #EEEEEE;
		img,b{
			width: 0.46875rem;
			height: 0.46875rem;
		}
	}
	ul{
		li{
			background: white;
			border-bottom: 1px solid #EEEEEE;
			display: flex;
			align-items: flex-end;
			img{
				width: 30%;
				padding: 0.625rem 0;
			}
			h1{
				font-weight: bold;
				font-size: 0.46875rem;
				margin: 0.3125rem;
			}
			p{
				color: #666666;
				margin-bottom: 0.625rem;
			}
		}
	}
	.word{
		padding: 1.25rem;
		text-align: center;
		line-height: 0.6875rem;
		color: #444444;
		p{
			font-size: 0.4375rem;
		}
		b{
			color: #0EA15F;
			font-weight: lighter;
		}
	}
	.bottom{
		position: fixed;
		bottom: 0;
		background: white;
		border-top: 0.03125rem solid #D9D9D9;
		width: 100%;
		height: 1.5625rem;
		padding: 0.15625rem 0.625rem;
		button{
			width: 100%;
			height: 100%;
			background: #0EA15F;
			color: white;
			border: none;
			border-radius: 0.15625rem;
		}
	}
}
</style>