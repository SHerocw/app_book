import activity from './state-activity.js';
import article from './state-article.js';

import consultation from './state-consultation.js';
import userList from './state-userList.js';

import local from './state-local.js';
export default {
	// 首页新闻列表数据
	activityNews : activity,
	activityArr : [],
	// 文章数据
	article,
	// 资讯数据
	consultationNews : consultation,
	consultationArr : [],
	// 前进后退效果类名
	transitionName : '',
	//用户列表
	userList,
	userInfo : null,
	local
}