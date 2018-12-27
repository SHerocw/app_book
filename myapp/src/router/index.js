import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import trends from '@/pages/trends'
import find from '@/pages/find'
import study from '@/pages/study'
import mine from '@/pages/mine'
import setting from '@/pages/center/setting'
import trends_addfocus from '@/pages/trends_addfocus'
import gift from '@/pages/gift'
import search from '@/pages/search'
import login from '@/pages/login'
import login_phone from '@/pages/login_phone'
import register from '@/pages/register'
import authorInfo from '@/pages/authorInfo'
import articles from '@/pages/articles'

Vue.use(Router)
var flag = localStorage.loginedUser;
if(!flag){
	var path = 'login'
}else{
	var path = 'trends'
}	
export default new Router({
  routes: [
    {
      path: '/trends',
      name: 'trends',
      meta : {
      	navShow : true
      },
      component: trends,
      children : [{
      	path : 'trends_addfocus',
      	name : 'trends_addfocus',
      	meta : {
	      	navShow : false
	      },
      	component : trends_addfocus
      },{
	  		path : ':tokenId',
	  		name : 'authorInfo',
	  		meta : {
	      	navShow : false
	      },
	      component : authorInfo
	  	},{
	  		path : ':articleId',
	  		name : 'articles',
	  		meta : {
	      	navShow : false
	      },
	      component : articles
	  	}]
    },{
    	path : '/find',
    	name : 'find',
    	meta : {
      	navShow : true
      },
    	component : find
    },{
    	path : '/study',
    	name : 'study',
    	meta : {
      	navShow : true
      },
    	component : study
    },{
    	path : '/mine',
    	name : 'mine',
    	meta : {
      	navShow : true
      },
    	component : mine,
    	children : [{
      	path : 'setting',
      	name : 'setting',
      	meta : {
	      	navShow : false
	      },
      	component : setting
      }]
    },{
	  	path : '/search',
	  	name : 'search',
	  	meta : {
	      	navShow : false
	      },
	  	component : search
  	},{
  		path : '/gift',
  		name : 'gift',
  		meta : {
	      	navShow : false
	      },
	      component : gift
  	},{
  		path : '/login',
  		name : 'login',
  		meta : {
	      	navShow : false
	      },
	    component : login,
	    children : [{
      	path : 'login_phone',
      	name : 'login_phone',
      	meta : {
	      	navShow : false
	      },
      	component : login_phone
      },{
      	path : 'register',
      	name : 'register',
      	meta : {
	      	navShow : false
	      },
      	component : register
      }]
	    },{
  		path : '*',
  		redirect : '/' + path
  	}
  ]
})
