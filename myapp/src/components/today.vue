<template>
	<transition name="slide-topLeft">
		<div class="today" v-if="showToday">
			<div class="base">
				<div class="head">
					<div class="left">
						<p>{{yearM}}</p>
						<h1>{{day}}</h1>
						<b>{{monthEn}}</b>
					</div>
					<div class="right">
						<h2>{{week}}</h2>
						<p>{{weekEn}}</p>
					</div>
				</div>
				<div class="card">
					<img src="../../static/img/daycheck_yh_up.png"/>
					<img src="../../static/img/daycheck_yh_bottom.png"/>
					<p>{{today.brief}}</p>
				</div>
				<div class="from">
					<div class="content">
						<img :src="today.img" />
						<div class="author">
							<h1>{{today.title}}</h1>
							<span>{{today.name}}</span>
						</div>
					</div>
					<p>—— 来自{{today.place}}</p>	
				</div>
				<div class="bottom">
					<div class="icon">
						<img src="../../static/img/daycheck_down.png"/>
						<img src="../../static/img/daycheck_pyq.png"/>
						<img src="../../static/img/daycheck_weixin.png"/>
					</div>
					<div class="make" @click="make">制作我的</div>
				</div>
			</div>
			<div class="close" @click="todayHide"></div>
		</div>
	</transition>
</template>

<script>
	import { mapState , mapGetters , mapMutations } from 'vuex'
	export default{
		name : 'today',
		data (){
			return{
				yearM : new Date().getFullYear()+'/'+ (new Date().getMonth()+1),
				monthEn : '',
				day : new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate(),
				week : '',
				weekEn : ''
			}
		},
		mounted(){
			this.week = this.toWeekUpper(new Date().getDay());
			this.monthEn = this.toMonthEn(new Date().getMonth());
			this.weekEn = this.toWeekEn(new Date().getDay());
		},
		computed : {
			...mapState(['showToday','today','isLogin']),
			...mapGetters(['toWeekEn','toMonthEn','toWeekUpper'])
		},
		methods:{
	     	...mapMutations(['todayHide','toLoginShow']),
	     	make(){
	     		if(!this.isLogin){
	     			this.toLoginShow()
	     		}else{
	     			
	     		}
	     	}
		},
	}
</script>

<style scoped lang="less">
.today{
	position: absolute;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,.5);
	padding:1.25rem  0.46875rem 0.625rem 0.46875rem;
	z-index: 9;
	top: 0;
	left: 0;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	.base{
		width: 100%;
		flex-grow: 1;
		background: url(../../static/img/daycheck_base_bg.png);
		background-size: 100% 100%;
		position: relative;
		padding: 0.3125rem;
		.head{
			color: #BDA06C;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0.3125rem;
			.left{
				padding: 0.15625rem 0;
				border-bottom: 0.03125rem solid #D3C294;
				border-top: 0.03125rem solid #D3C294;
				p{
					font-size: 0.4375rem
				}
				h1{
					font-size: 1.5625rem;
					font-weight: bold;
				}
				b{
					font-size: 0.4375rem;
					font-weight: bold;
				}
			}
			.right{
				text-align: right;
				h2{
					font-size: 0.625rem;	
				}
				p{
					margin-top: 0.15625rem;
					letter-spacing: 0.09375rem;
				}
			}
		}
		.card{
			width: 100%;
			height: 3.75rem;
			background: #f3ece0;
			border-radius: 0.15625rem;
			margin-top: 0.3125rem;
			display: flex;
			align-items: center;
			position: relative;
			img{
				position: absolute;
				width: 0.625rem;
				height: 0.625rem;
			}
			img:first-child{
				top: 0.46875rem;
				left: 0.46875rem;
			}
			img:nth-child(2){
				right: 0.46875rem;
				bottom: 0.46875rem;
			}
			p{
				margin-left: 0.625rem;
				font-size: 0.4375rem;
				
			}
		}
		.from{
			padding: 0.3125rem;
			.content{
				padding: 0.3125rem 0;
				height: 2.8125rem;
				display: flex;
				img{
					height: 100%;
					margin-right: 0.625rem;
					flex-shrink: 0;
				}
				.author{
					h1{
						font-weight: bold;
						font-size: 0.4375rem;
						margin-bottom: 0.3125rem;
					}
				}
			}
			p{
				text-align: right;
				color: #999999;
			}
		}
		.bottom{
			width: 100%;
			position: absolute;
			left: 0;
			bottom: 0.3125rem;
			display: flex;
			align-items: center;
			padding: 0 0.625rem;
			justify-content: space-between;
			.icon{
				img{
					width: 0.5rem;
					height: 0.5rem;
					margin: 0 0.3125rem;
				}
			}
			.make{
				font-size: 0.46875rem;
				font-weight: bold;
				padding: 0.1875rem 0.625rem;
				border: 0.03125rem solid #BDA06C;
				border-radius: 0.625rem;
			}
		}
	}
	.close{
		margin-top: 0.46875rem;
		height: 0.78125rem;
		flex-shrink: 0;
		background: url(../../static/img/daycheck_canle.png) no-repeat center center;
		background-size: auto 100%;
	}
}
</style>