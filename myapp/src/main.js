// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import vueTabbarSlide from 'vue-tabbar-slide'
import store from './store'
import 'swiper/dist/css/swiper.css'

Vue.use(vueTabbarSlide)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  beforeCreate(){
  	if(localStorage.loginedUser){
			store.commit('logined')
  	}
  },
  router,
  store,
  components: { App },
  template: '<App/>'
})