export default {
	toWeekUpper(){
		return function(num){
			var weeks = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
			return weeks[num-1]
		}	
	},
	toWeekEn(){
		return function(num){
			var weeks = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
			return weeks[num-1]
		}
	},
	toMonthEn(){
		return function(num){
			var months = ['January','February','March','April','June','July','August','September','October','November','December']
			return months[num-1]
		}
	},
	register(state){
		return function(data){
			if(localStorage.users){
				var result = JSON.parse(localStorage.users).filter(function(v,i){
					return v.phone == data.phone
				})
			}else{
				var result = state.users.filter(function(v,i){
					return v.phone == data.phone
				})
			}
			if(result.length == 0){
				var regPsd = /^\S{6,20}$/;
				if(regPsd.test(data.psd)){
					state.users.push(data)
					localStorage.users = JSON.stringify(state.users)
				}else{
					return '密码格式错误'
				}
			}else{
				return '该手机号已存在'
			}	
		}
	},
	login (state){
		return function(data){
			var userArr = state.users.filter(function(v,i){
				return v.phone == data.phone
			})
			var passArr = userArr.filter(function(v,i){
				return v.psd == data.psd
			})
			if(userArr.length == 0){
				return '查无此人';
			}else if(passArr.length == 0){
				return '密码错误';
			}else{
				state.isLogin = true;
				localStorage.loginedUser = JSON.stringify(passArr[0])
				return '';
			}
		}
	}
}
