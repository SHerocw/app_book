<template>
	<div class="container">
		<div class="title-default">
			<div class="left">
				<i class="fa fa-angle-left" @click="back"></i>
			</div>
			<h3>手机注册</h3>
		</div>

		<div class="submit">
			<div class="warning">
				<p>
					<i class="fa fa-exclamation-circle"></i>
					<span>您输入的手机号格式不正确！</span>
				</p>
			</div>
		</div>

		<div class="growp">
			<div class="item user">
				<i class="fa fa-user"></i>
				<input type="text" placeholder="请输入11位手机号" v-model="user">
			</div>
			<div class="item pass">
				<i class="fa fa-lock"></i>
				<input type="text" placeholder="请输入6-16位数字或字母密码" v-model="pass">
				<router-link to="">忘记密码</router-link>
			</div>
		</div>

		<div class="growp">
			<div class="item">
				<i class="fa fa-pencil-square-o"></i>
				<input type="text" class="input-identifying" placeholder="请输入验证码" v-model="identify">
			</div>
			<div class="identifying" @click="sendIdenty">
				发送验证码
			</div>
		</div>

		<div class="submit">
			<button class="btn" @click="toReg">注册</button>
			<div class="protocol">
				<input type="checkbox">
				<router-link to="/register">已阅读并同意用户协议</router-link>
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
				identify : '',
				user : '',
				pass :''
			}
		},
		methods : {
			back(){
				this.$router.go(-1)
			},
			sendIdenty(){
				this.$ajax({
					url : '/VueHandler/AdminLoginAndRegHandler?action=verification'
				}).then((res) => {
					this.identify = res.data.data
				})
			},
			toReg(){
				this.$ajax({
					url : '/VueHandler/AdminLoginAndRegHandler?action=add',
					method : 'post',
					data : {
						username : this.user,
						password : this.pass
					}
				}).then((res) => {
					this.$router.push('/login')
				})
			}
		}
	}
</script>