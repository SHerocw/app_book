<template>
	<li v-if="li_hide">
		<div class="li_head">
			<div class="head_left" @click="toInfoPath">
				<img :src="data.face"/>
				<div class="nickname">
					<h6>{{data.nickname}}</h6>
					<p>{{data.time}}</p>
				</div>
			</div>
			<div class="head_right" v-if="more_flag">
				<img src="../../static/img/more_style2_black_v1.png" @click="show_dislike"/>
				<span v-if="dislike_flag" @click="deleteIt">不感兴趣</span>
			</div>
		</div>
		<div class="li_main" @click="toArticle">
			<div class="main_left">
				<h5>{{data.title}}</h5>
				<p>{{data.brief}}</p>
			</div>
			<div class="main_right" v-if="data.viewimg">
				<img :src="data.viewimg"/>
			</div>
		</div>
		<div class="li_bottom">
			<i></i><span>0</span><b :class="{active:like_flag}" @click="like"></b><span>{{like_num}}</span>
		</div>
	</li>
</template>

<script>
	import { mapState , mapMutations } from 'vuex'
	export default {
		name : 'list-rec',
		props : ['data','more_flag'],
		data (){
			return{
				dislike_flag : false,
				li_hide : true,
				like_flag : false,
				like_num :0,
				aInfoPath : ''
			}
		},
		methods : {
			...mapMutations(['toLoginShow']),
			show_dislike(){
				this.dislike_flag = !this.dislike_flag
			},
			deleteIt(){
				this.li_hide = !this.li_hide
			},
			like(){
				if(!this.isLogin){
					this.toLoginShow()
				}else{
					this.like_flag = !this.like_flag
					if(this.like_flag){
						this.like_num ++
					}else{
						this.like_num --
					}
				}
			},
			toInfoPath(){
				this.$router.push({ params: { tokenId: this.data.infoPath },name : 'authorInfo'})
			},
			toArticle(){
				this.$router.push({params: { articleId: this.data.articlePath },name : 'articles'})
			}
		},
		computed : {
			...mapState(['isLogin'])
		}
	}
</script>

<style lang="less" scoped>
li{
	background: white;
	margin-bottom: 0.1875rem;
	padding: 0.25rem;
	word-break:normal;
	.li_head{
		display: flex;
		justify-content: space-between;
		.head_left{
			display: flex;
			img{
				width: 0.78125rem;
				height: 0.78125rem;
				border-radius: 50%;
				margin-right: 0.3125rem;
			}
			h6{
				font-size: 0.40625rem;
			}
			p{
				color: #bbb;
				line-height: 0.625rem;
			}
		}
		.head_right{
			position: relative;
			width: 0.125rem;
			img{
				width: 100%;
			}
			span{
				display: block;
				position: absolute;
				top: 0.9375rem;
				right: 0;
				width: 1.875rem;
				text-align: center;
				line-height: 0.625rem;
				border: 0.03125rem solid #D9D9D9;
				border-radius: 0.09375rem;
				background: #FFFFFF;
			}
		}
	}
	.li_main{
		display: flex;
		align-items: center;
		.main_left{
			flex-grow: 1;
			h5{
				font-size: 0.4375rem;
				font-weight: bold;
				margin-bottom: 0.3125rem;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			p{
				height: 1.34375rem;
				overflow: hidden;
				line-height: 0.625rem;
			}
		}
		.main_right{
			height: 1.875rem;
			flex-shrink: 0;
			text-align: center;
			width: 2.125rem;
			margin-left: 0.46875rem;
			img{
				max-width: 100%;
				max-height: 100%;
			}
		}
	}
	.li_bottom{
		text-align: right;
		margin-top: 0.3125rem;
		*{
			margin: 0 0.15625rem;
		}
		i,b{
			display: inline-block;
			width: 0.625rem;
			height: 0.625rem;
			vertical-align: middle;
		}
		i{
			background: url(../../static/img/common_v1.png);	
			background-size: cover;
		}
		b{
			background: url(../../static/img/comment_zan.png);
			background-size: cover;
			transition: all .5s;
		}
		b.active{
			background: url(../../static/img/comment_zan_hou.png);
			background-size: cover;
		}
	}
}
</style>