import Vue from 'vue'
import Router from 'vue-router'
import consultation from '@/pages/consultation/consultation'

import activity from '@/pages/activity/activity'
import mould from '@/pages/activity/activity-mould'
import article from '@/pages/activity/article'

import local from '@/pages/local/local'

import my from '@/pages/my/my'
import register from '@/pages/my/register'
import login from '@/pages/my/login'

Vue.use(Router)

var router = new Router({
  routes: [
	{
		path: '/consultation',
		name: 'consultation',
		component: consultation,
		meta : {
			index : 0,
			showNav : true
		}
	},{
		path : '/activity',
		name : "activity",
		component : activity,
		meta : {
			index : 0,
			showNav : true
		}
	},{
		path : '/activity/:type',
		name : "common",
		component : mould,
		meta : {
			index : 1,
			showNav : false
		}
	},{
		path : '/article/:id',
		name : "article",
		component : article,
		meta : {
			index : 2,
			showNav : false
		}
	},{
		path : '/local',
		name : "local",
		component : local,
		meta : {
			index : 0,
			showNav : true
		}
	},{
		path : '/my',
		name : "my",
		component : my,
		meta : {
			index : 0,
			showNav : true
		}
	},{
		path : '/register',
		name : 'register',
		component : register,
		meta : {
			index : 2,
			showNav : false
		}
	},{
		path : '/login',
		name : 'login',
		component : login,
		meta : {
			index : 1,
			showNav : false
		}
	},{
		path : '*',
		redirect : '/activity'
	}
  ]
})

export default router;
