export default {
	todayShow(state){
		state.showToday = true
	},
	todayHide(state){
		state.showToday = false
	},
	toLoginShow(state){
		state.toLogin = true
	},
	toLoginHide(state){
		state.toLogin = false
	},
	logined(state){
		state.isLogin = true
	},
	exit(state){
		state.isLogin = false
	}
}