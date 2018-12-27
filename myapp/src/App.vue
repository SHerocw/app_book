<template>
  <div id="app">
    <div class="main"><router-view/></div>
    <div class="navBar" v-if="$route.meta.navShow">
    	<ul>
    		<li v-for="i in navs"><router-link :to="i.path"><img :src="i.bg" v-if="!i.flag"/><img :src="i.bgActive" v-if="i.flag"/>{{i.name}}</router-link></li>
    	</ul>
    </div>
    <today></today>
    <tologin></tologin>
  </div>
  
</template>

<script>
	import today from './components/today'
	import tologin from './components/tologin'
export default {
  name: 'App',
  data () {
  	return {
  		navs : [{
  			path : '/trends',
  			name : '动态',
  			bg : './static/img/feed_normal_v1.png',
  			bgActive : './static/img/feed_select_v1.png',
  			flag : false
  		},{
  			path : '/find',
  			name : '发现',
  			bg : './static/img/explore_normal_v1.png',
  			bgActive : './static/img/explore_select_v1.png',
  			flag : false
  		},{
  			path : '/study',
  			name : '学习',
  			bg : './static/img/study_normal_v1.png',
  			bgActive : './static/img/study_select_v1.png',
  			flag : false	
  		},{
  			path : '/mine',
  			name : '我的',
  			bg : './static/img/mine_normal_v1.png',
  			bgActive : './static/img/mine_select_v1.png',
  			flag : false
  		}]
  	}
  },
  mounted(){
  	console.log(localStorage.loginedUser)
		this.navs.forEach((o,i) => {
			if(this.$route.path == o.path){
				o.flag = true
			}else{
				o.flag = false
			}
		})
  },
  watch : {
  	'$route'(to,from){
  		this.navs.forEach((o,i) => {
  			if(o.path == to.path){
  				o.flag = true
  			}else{
  				o.flag = false
  			}
  		})
  	}
  },
  components : {
  	today,
  	tologin
  }
}
</script>

<style lang="less">
	#app{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.main{
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			background: #eeeeee;
			overflow: hidden;
		}
		.navBar{
			flex-shrink: 0;
			height: 1.5625rem;
			border-top: 0.03125rem solid #D9D9D9;
			padding-top: 0.15625rem;
			background: white;
			ul{
				display: flex;
				li{
					width: 25%;
					a{
						display: flex;
						width: 100%;
						height: 100%;
						flex-direction: column;
						text-align: center;
						color: #d9d9d9;
						img{
							width: 0.875rem;
							height: 0.875rem;
							margin: auto;
						}
					}
					.router-link-active{
						color: #0EA15F;
						text-decoration: none;
					}
				}
			}
		}
	}
</style>
