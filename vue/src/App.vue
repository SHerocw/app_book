<template>
  <div id="app">
  	<div class="main"><router-view/></div>
    
    <div class="nav">
      <ul>
        <li v-for="nav in navs"><router-link :to="nav.link"><i class="fa" :class="nav.icon"></i>{{nav.title}}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return {
      navs : [{
        link : '/home',
        title : '首页',
        icon : 'fa-home',
        flag : true
      },{
        link : '/list',
        title : '课程列表',
        icon : 'fa-list',
        flag : false
      },{
        link : '/like',
        title : '我的课程',
        icon : 'fa-book',
        flag : false
      },{
        link : '/mine',
        title : '个人中心',
        icon : 'fa-user',
        flag : false
      }],
      num : 0
    }
  }
}
</script>
<style>
</style>
