<template>
	<div class="container">
		<div class="title-default">
			<div class="left">
				<i class="fa fa-angle-left" @click="back"></i>
			</div>
			<h3>登录</h3>
		</div>

		<div class="header">
			<div class="icon">
				<i class="fa fa-qq"></i>
			</div>
			<div class="icon">
				<i class="fa fa-weixin"></i>
			</div>
			<div class="icon">
				<i class="fa fa-weibo"></i>
			</div>
		</div>
		
		<div class="growp">
			<div class="item user">
				<i class="fa fa-user"></i>
				<input type="text" placeholder="请输入手机号" v-model="user">
			</div>
			<div class="item pass">
				<i class="fa fa-lock"></i>
				<input type="text" placeholder="请输入6-16位数字或字母密码" v-model="pass">
				<router-link to="">忘记密码</router-link>
			</div>
		</div>

		<div class="submit">
			<div class="warning" :class="{show : isShowWarning}">
				<p>
					<i class="fa fa-exclamation-circle"></i>
					<span>{{warningText}}</span>
				</p>
			</div>
			<button class="btn" @click="login">登录</button>
			<div class="goRegister">
				<router-link to="/register">没有账号？快速注册 &gt;</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex';
	export default {
		name : 'my',
		data (){
			return {
				options : [{
					icon : 'fa-star-o',
					text : '我的收藏',
					url : ''
				},{
					icon : 'fa-commenting-o',
					text : '我的评论',
					url : ''
				},{
					icon : 'fa-bookmark-o',
					text : '我的关注',
					url : ''
				},{
					icon : 'fa-search',
					text : '新闻搜索',
					url : ''
				},{
					icon : 'fa-sun-o',
					text : '设置',
					url : ''
				}],
				user : '',
				pass : '',
				warningText : '',
				isShowWarning : false
			}
		},
		methods : {
			back(){
				this.$router.go(-1)
			},

			login(){
				this.warningText = this.$store.getters.login({
					user : this.user,
					pass : this.pass
				});

				if(this.warningText == ''){
					this.isShowWarning = false;
					this.$router.push({ path: 'my' })
				}else{
					this.isShowWarning = true
				}
				
				this.$ajax({
					url : '/VueHandler/AdminLoginAndRegHandler?action=login',
					method : 'post',
					data : {
						username : this.user,
						password : this.pass
					}
				}).then(function(res){
					console.log(res)
				})
			}
		}
	}
</script>