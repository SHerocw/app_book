<template>
	<li>
		<div class="hor_img">
			<img :src="dataHor.img"/>
		</div>
		<div class="hor_text">
			<h2>{{dataHor.title}}</h2>
			<h6 v-if="presonShow"><span v-if="presonShows">主讲人：</span>{{dataHor.name}}<span v-if="presonShows">丨{{dataHor.degree}}</span></h6>
			<p>{{dataHor.brief}}</p>
		</div>
	</li>
</template>

<script>
	export default{
		name : 'horRank',
		props : ['dataHor','presonShow','presonShows']
	}
</script>

<style scoped lang="less">
li{
	word-break:normal;
	padding: 0.625rem 0.3125rem;
	display: flex;
	.hor_img{
		width: 20%;
		flex-shrink: 0;
		margin-right: 0.625rem;
		img{
			width: 100%;
		}
	}
	.hor_text{
		flex-grow: 1;
		padding-bottom: 0.625rem;
		h2{
			font-size: 0.40625rem;
			font-weight: bold;
		}
		p{
			margin-top: 0.625rem;	
		}
	}
}
</style>