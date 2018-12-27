<template>
	<div class="list common">
		<div class="header">
			<div class="search">
				<i class="fa fa-search"></i>
				<input type="text" placeholder="请输入搜索词"/>
			</div>
		</div>
		<div class="option">
			<div class="lessonList" :class="{active:lessonflag}" @click="toggleLesson">课程列表 <i class="fa" :class="{'fa-angle-down' : !lessonflag,'fa-angle-up' : lessonflag}"></i></div>
			<div class="price" :class="{active:priceflag}" @click="togglePrice">价格 <i class="fa" :class="{'fa-angle-down' : !priceflag,'fa-angle-up' : priceflag}"></i></div>
			<div class="pulldown" :class="{opacity:lessonflag}">
				<ul>
					<li v-for="i in subject" @click="select(i)">{{i}}</li>
				</ul>
			</div>
			<div class="pulldown" :class="{opacity:priceflag}">
				<dl>
					<dd v-for="i in subPrice" @click="selectP(i)">{{i}}</dd>
				</dl>
			</div>
		</div>
		<div class="wrapper">
			<ul class="lesinfo">
				<li v-for="i in selLesson">
					<img :src="i.face"/>
					<div>
						<h2>{{i.name}}</h2>
						<p>{{i.comments}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { mapState } from 'vuex'
	export default {
	  name: 'list',
	  data(){
	  	return{
	  		lessonflag : false,
	  		priceflag : false,
	  		subject : ['JAVA','UI','JavaScript','IOS','Android','PHP','全部'],
	  		subPrice : ['免费','收费','全部'],
	  		selLesson : []
	  	}
	  },
	  methods : {
	  	toggleLesson(){
	  		this.lessonflag = !this.lessonflag;
	  		this.priceflag = false
	  	},
	  	togglePrice(){
	  		this.priceflag = !this.priceflag;
	  		this.lessonflag = false
	  	},
	  	select(type){
	  		if(type != '全部'){
	  			this.selLesson = this.$store.getters.getData(type);
	  		}else{
	  			this.selLesson = this.lessonInfo
	  		}
	  	},
	  	selectP(typeP){
	  		if(typeP != '全部'){
	  			this.selLesson = this.$store.getters.getPriceData(typeP);
	  		}else{
	  			this.selLesson = this.lessonInfo
	  		}
	  	}
	  },
	  computed : {
	   	...mapState(['lessonInfo'])
	   },
	  mounted(){
	  	this.selLesson = this.lessonInfo
	   	new BScroll('.wrapper',{
	   		click : true
	   	})
	   }
	}
</script>

<style scoped>
.search{
	background: #EEEEEE;
	border-radius: 0.125rem;
	width: 100%;
	height: 0.9375rem;
	display: flex;
}
.search input{
	background: transparent;
	flex-grow: 1;
	border: none;
}
.search i{
	text-align: center;
	line-height: 0.9375rem;
	width: 0.9375rem;
}
.lessonList{
	border-right: 0.03125rem solid #c0c0c0;
}
.pulldown.opacity{
	opacity: 1;
	z-index: 9;
}
.active{
	color: #42B983;
}
.option i{
	font-size: 0.625rem;
}
.pulldown{
	position: absolute;
	top: 1.25rem;
	left: 0;
	border-top: 0.03125rem solid #c0c0c0;
	width: 100%;
	background: #e8e8e8;
	opacity: 0;
	transition: all .5s;
	z-index: -9;
}
.pulldown ul{
	padding: 0.3125rem;
	display: flex;
	flex-wrap: wrap;
	width: 100%;
}
.pulldown li{
	width: 23%;
	margin: 1%;
	border: 0.03125rem solid #C0C0C0;
	border-radius: 0.15625rem;
	background: #FFFFFF;
	font-size: 0.40625rem;
}
.pulldown dd{
	text-align: left;
	padding: 0.15625rem 1.875rem;
	border-bottom: 0.03125rem solid #DDDDDD;
}
.lesinfo li{
	border-bottom: 0.03125rem solid #C0C0C0;
	padding: 0.25rem;
	display: flex;
}
.lesinfo li>div{
	flex-grow: 1;
}
</style>