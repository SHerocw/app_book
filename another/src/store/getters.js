export default {
	login (state){
		return function(data){
			var userArr = state.userList.filter(function(v,i){
				return v.user == data.user
			})
			var passArr = userArr.filter(function(v,i){
				return v.pass == data.pass
			})
			if(userArr.length == 0){
				return '请输入正确的账号！';
			}else if(passArr.length == 0){
				return '请输入正确的密码！';
			}else{
				localStorage.user = JSON.stringify(passArr[0])
				return '';
			}
		}
	}
}