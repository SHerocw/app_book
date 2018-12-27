export default {
	getData(state){
		return function(type){
			var newArr = [];
			state.lessonInfo.forEach(function(v,i){
				if(v.type == type){
					newArr.push(v);
				}
			})
			return newArr;
		}
	},
	getPriceData(state){
		return function(typeP){
			var newArr = [];
			state.lessonInfo.forEach(function(v,i){
				if(v.typeP == typeP){
					newArr.push(v);
				}
			})
			return newArr;
		}
	}
}