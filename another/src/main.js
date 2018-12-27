// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import 'swiper/dist/css/swiper.min.css';
import 'font-awesome/css/font-awesome.min.css';

import axios from 'axios';
Vue.prototype.$ajax = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
	if(to.meta.index > from.meta.index){
		store.commit('changeTransitoin','left')
	}else if(to.meta.index < from.meta.index){
		store.commit('changeTransitoin','right')
	}else{
		store.commit('changeTransitoin','')
	}
	next();
})