import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/HelloWorld'
import list from '@/pages/list'
import like from '@/pages/like'
import mine from '@/pages/mine'
import register from '@/pages/register'
import forget from '@/pages/forget'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },{
      path: '/list',
      name: 'list',
      component: list
    },{
    	path : '/like',
    	name : 'like',
    	component : like
    },{
    	path : '/mine',
    	name : 'mine',
    	component : mine
    },{
    	path : '/register',
    	name : 'register',
    	component : register
    },{
    	path : '/forget',
    	name : 'forget',
    	component : forget
    },{
    	path : '*',
    	redirect : '/home'
    }
  ]
})
