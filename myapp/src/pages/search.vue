<template>
	<transition name="slide-right">
		<div class="search" @click="hideShade">
			<div class="shade" v-if="showUl"></div>
			<div class="header">
				<router-link :to="back"><img src="../../static/img/back_black.png"/></router-link>
				<div class="search">
					<h5 @click.stop="ulChange" v-if="selShow">{{selectCon}}</h5>
					<ul v-if="showUl">
						<li v-for="(v,i) in selects" :key="i" @click="liChange(i,v)" :class="{active : i == index}">{{v}}</li>
					</ul>
					<input :placeholder="sel_placeholder" v-model="sea_user"/>
				</div>
				<img src="../../static/img/search.png" @click="search"/>
			</div>
			<div class="hot" v-if="selShow">
				<h2><img src="../../static/img/search_fire.png"/>热门搜索</h2>
				<ul>
					<li v-for="(v,i) in recommend" :key="i">{{v}}</li>
				</ul>
			</div>
			<transition name="slide-bottom"><div class="hint" v-if="hintShow"><span>{{hint}}</span></div></transition>
		</div>
	</transition>
</template>

<script>
	export default{
		name : 'trends_search',
		data(){
			return{
				selects : ['全部','用户','随笔'],
				showUl : false,
				index : 0,
				selectCon : '全部',
				placeholder : ['搜索用户、随笔','搜索用户','搜索随笔'],
				sel_placeholder : '搜索用户、随笔',
				recommend : ['红楼梦','了不起的盖茨比','英语','早读','情商','思维导图','张羽'],
				back : '',
				selShow : true,
				sea_user : '',
				hint : '',
				hintShow : false
			}
		},
		methods : {
			ulChange(){
				this.showUl = !this.showUl
			},
			hideShade(){
				this.showUl = false
			},
			liChange(i,v){
				this.index = i;
				this.selectCon = v;
				this.sel_placeholder = this.placeholder[i];
			},
			search(){
				if(this.sea_user == ''){
					this.hintShow = true
					this.hint = '您还没有输入搜索内容'
					setTimeout(() => {
						this.hintShow = false
					},2000)
				}
			}
		},
		mounted(){
		},
		beforeRouteEnter (to,from,next){
			console.log(to,from)
			next(vm => {
				vm.back = from.path
				if(from.path == '/trends'){
					vm.selects = ['全部','用户','随笔'];
					vm.placeholder = ['搜索用户、随笔','搜索用户','搜索随笔'];
					vm.sel_placeholder = '搜索用户、随笔';
					vm.recommend = ['红楼梦','了不起的盖茨比','英语','早读','情商','思维导图','张羽'];
				}else if(from.path == '/find'){
					vm.selects = ['全部','书籍','听书','书单','课程'];
					vm.placeholder = ['搜索书籍、听书、书单、课程','搜索书籍','搜索听书','搜索书单','搜索课程'];
					vm.sel_placeholder = '搜索书籍、听书、书单、课程';
					vm.recommend = ['红楼梦','了不起的盖茨比','申一帆','思维导图','瑜伽','英语','早读','情商','思维导图','张羽'];
				}else{
					vm.selShow = false;
					if(from.path == '/trends/trends_addfocus'){
						vm.sel_placeholder = '搜索用户'
					}else{
						vm.sel_placeholder = '搜索随笔'
					}
				}
			})	
		}
	}
</script>

<style scoped lang="less">
.search{
	width: 100%;
	height: 100%;
	position: absolute;
	background: white;
	.shade{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.1);
	}
	.header{
		border-bottom: 0.03125rem solid #EEEEEE;
		a{
			padding-top: 0.3125rem;
		}
		img{
			height: 0.5625rem;
			margin: 0 0.46875rem;
		}
		.search{
			flex-grow: 1;
			background: #EEEEEE;
			height: 100%;
			padding: 0.15625rem 0.3125rem;
			position: relative;
			display: flex;
			align-items: center;
			border-radius: 0.125rem;
			h5{
				display: inline-block;
				flex-shrink: 0;
				height: 100%;
				border-right: 0.03125rem solid #BBBBBB;
				display: flex;
				align-items: center;
				padding-right: 0.15625rem;
			}
			ul{
				width: 1.875rem;
				position: absolute;
				top: 1.3rem;
				left: 0;
				z-index: 9;
				border-radius: 0.125rem;
				background: white;
				.active{
					color: #0EA15F;
				}
				li{
					border-bottom: 0.03125rem solid #EEEEEE;
					padding-left: 0.46875rem;
				}
			}
			input{
				border: none;
				background: transparent;
				height: 100%;
				flex-grow: 1;
				padding: 0 0.15625rem;
				color: #0EA15F;	
			}
		}
		.search h5:after{
			content: "";
			display: inline-block;
			width: 8px;
			height: 100%;
			vertical-align: middle;
			margin-left: 0.15625rem;
			background: url(../../static/img/book_gray_xia.png) no-repeat center center #EEEEEE;
			background-size: 100% auto;
			pointer-events: none;
		}
	}
	.hot{
		padding: 0.9375rem 0.46875rem;
		border-bottom: 0.03125rem solid #EEEEEE;
		h2{
			margin: 0.3125rem;
			img{
				width: 0.4375rem;
				vertical-align: middle;
				margin-right: 0.3125rem;
			}
		}
		ul{
			display: flex;
			flex-wrap: wrap;
			li{
				margin: 0.15625rem;
				padding: 0.15625rem 0.3125rem;
				background: #EEEEEE;
				border-radius: 0.46875rem;
			}
		}
	}
	.hint{
		width: 100%;
		position: absolute;
		bottom : 1.25rem;
		text-align: center;
		span{
			display: inline-block;
			padding: 0.3125rem;
			background: rgba(0,0,0,.5);
			border-radius: 0.125rem;
			color: white;
		}
	}
}
</style>