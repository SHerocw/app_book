export default {
	addActivityArr (state,data){
		state.activityArr = state.activityArr.concat(data);
	},

	addConsultationArr (state,data){
		state.consultationArr = state.consultationArr.concat(data);
	},

	changeTransitoin (state,data){
		state.transitionName = data;
	},

	changeCollect (state,data){
		state.article.forEach((v,i) => {
			if(v.id == data){
				v.isCollect = !v.isCollect;
			}
		})
	}
}

