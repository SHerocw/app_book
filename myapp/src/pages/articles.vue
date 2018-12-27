<template>
<transition name="slide-right">
	<div class="articles">
		<div class="header">
			<router-link to="/trends"><img src="../../static/img/title_jiantou_left_gray.png" class="back"/></router-link>
			<span>随笔详情</span>
			<b></b>
		</div>
		<div class="wrapper" ref="wrap">
			<div>
				<h2>{{title}}</h2>
				<div class="info">
					<img :src="face" />
					<b>{{nickname}}</b>
				</div>
				<div class="time"><span>{{time}}</span><span>{{word}}字</span></div>
				<div class="con" v-html="content"></div>
			</div>
		</div>
		<div class="foot">
			<input type="text" placeholder="写评论"/>
			<img src="../../static/img/icon_pack_comment.png"/>
			<img src="../../static/img/comment_zan.png"/>
			<img src="../../static/img/icon_pack_share1.png"/>
		</div>	
	</div>
</transition>
</template>

<script>
	import BScroll from 'better-scroll'
	import { mapState , mapMutations } from 'vuex'
	export default{
		name : 'articles',
		data(){
			return{
				nickname : '',
				face : '',
				title : '',
				time :'',
				word : '',
				content : ''
			}
		},
		mounted(){
			const scroll = new BScroll(this.$refs.wrap,{
				click : true,
				bounce : false,
			});
			this.tab1_list.concat(this.tab2_list).forEach((v,i) => {
				if(this.$route.params.articleId == v.articlePath){
					this.nickname = v.nickname;
					this.face = v.face;
					this.title = v.title;
					this.time = v.time;
					this.word = v.article.word;
					this.content = v.article.content;
				}
			});
		},
		computed : {
			...mapState(['tab1_list','tab2_list'])
		},
	}
</script>

<style scoped lang="less">
.articles{
	display: flex;
	flex-direction: column;
	.header{
		border-bottom: 0.03125rem solid #EEEEEE;
		background: #FFFFFF;
		span{
			font-size: 0.46875rem;
		}
		.back{
			width: 0.5rem;
			height: 0.5rem;
		}
	}
	h2{
		padding: 0.625rem 0 0.3125rem 0.46875rem;
		background: white;
		font-size: 0.4375rem;
		font-weight: bold;
	}
	.info{
		background: white;
		padding: 0.3125rem;
		img{
			width: 1.09375rem;
			height: 1.09375rem;
			border-radius: 50%;
			vertical-align: top;
			margin-right: 0.3125rem;
		}
	}
	.time{
		padding: 0.625rem;
		background: white;
		span{
			margin-right: 0.3125rem;
			color: #666666;
		}
	}
	.con{
		padding: 0.625rem;
		background: #FFFFFF;
		line-height: 0.6875rem;
		text-indent: 2em;
	}
	.foot{
		background: white;
		height: 1.25rem;
		flex-shrink: 0;
		padding: 0.15625rem;
		display: flex;
		align-items: center;
		img{
			width: 0.625rem;
			height: 0.625rem;
			margin: 0 0.3125rem;
		}
		input{
			flex-grow: 1;
			height: 100%;
			border: none;
			border-radius: 0.46875rem;
			padding: 0 0.3125rem;
			background: #EEEEEE;
		}
	}
}
</style>