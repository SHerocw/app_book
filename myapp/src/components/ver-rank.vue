<template>
	<li>
		<div class="ver_img">
			<img :src="data.img"/>
			<div class="ver_post">共{{data.classNum}}课时<span v-if="orderShow">,{{data.orderNum}}人已订阅</span></div>
		</div>
		<h3>{{data.title}}</h3>
		<p><span v-if="teaShow">主讲人：</span>{{data.name}}<span v-if="degreeShow">丨{{data.degree}}</span></p>
		<p v-if="priceShow" class="price">{{data.price}}</p>
	</li>
</template>

<script>
	export default{
		name : 'verRank',
		props : ['data','priceShow','degreeShow','orderShow','teaShow']
	}
</script>

<style scoped lang="less">
li{
	width: 50%;
	padding: 0.625rem 0.15625rem;
	position: relative;
	overflow: hidden;
	word-break:normal;
	.ver_img{
		position: relative;
		overflow: hidden;
		height: 2.5rem;
		img{
			position: absolute;
			width: 100%;	
		}
		.ver_post{
			position: absolute;
			background: rgba(0,0,0,.4);
			height: 0.625rem;
			width: 100%;
			bottom: 0;
			color: white;
			line-height: 0.625rem;
			text-indent: 1em;
		}
	}
	h3{
		font-weight: bold;
		margin: 0.3125rem 0;
	}
	.price{
		font-size: 0.4375rem;
		font-weight: bold;
		color: #f0aa60;
		position: absolute;
		bottom: 0;
	}
}
</style>