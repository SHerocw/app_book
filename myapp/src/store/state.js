import tablist from './state-tablist.js';
export default {
	isLogin : false,
	toLogin : false,
	showToday : false,
	tab1_list : tablist.tab1_list,
	tab2_list : tablist.tab2_list,
	orders : tablist.orders,
	users : [],
	loginedUser : [],
	today :{
		brief : '如何通过金融思维，提升自身职场价值.',
		img : './static/img/book.jpg',
		title : '精准努力',
		name : '[日] 野口真人',
		place : '有书APP'
	},
	tab1_list_add : [],
	lessons:[{
		img : './static/img/gongdu(1).jpg',
		classNum :21,
		orderNum :'1000+',
		title :'一生受用的内衣选购课',
		name :'于晓丹',
		degree :'国际顶级内衣设计师',
		links :''
	},{
		img : './static/img/gongdu(2).jpg',
		classNum :28,
		orderNum :'1.7万+',
		title :'林清玄情绪课，提高你的幸福指数',
		name :'林清玄',
		degree :'散文家、诗人、学者',
		links :''
	},{
		img : './static/img/gongdu(3).jpg',
		classNum :61,
		orderNum :'2万+',
		title :'以美学视角，诠释三千年中国文学',
		name :'蒋勋',
		degree :'台湾美学大师',
		links :''
	},{
		img : './static/img/gongdu(4).jpg',
		classNum :34,
		orderNum :'5.4万+',
		title :'北大学霸教你获取高分的秘密',
		name :'刘媛媛',
		degree :'北大才女，超演冠军',
		links :''
	}],
	fortune :[{
		img : './static/img/person.jpg',
		icon : '拼职场',
		title : '升职加薪，告别月光族',
		brief : '前京东副总裁老路传授高招，让你在职场脱颖而出，敲开财富大门',
		links : ''
	},{
		img : './static/img/person.jpg',
		icon : '养财商',
		title : '摆脱贫穷，从思维开始转变',
		brief : '别以为赚到钱就够了，管钱用钱的智慧也是变富的关键',
		links : ''
	},{
		img : './static/img/person.jpg',
		icon : '抓机遇',
		title : '消灭拖延病，把握财富机遇',
		brief : '多少个发财的机会在你“等会再做”的拖延中丢失了。即刻行动，掌握财富人生',
		links : ''
	},{
		img : './static/img/person.jpg',
		icon : '学理财',
		title : '拒绝死工资，学会高效赚钱',
		brief : '普通人也能一学就会的理财知识，解决你99%的赚钱难题',
		links : ''
	}],
	ease:[{
		text : '早安：水深不语，人稳不言',
		link : ''
	},{
		text : '早安，断舍离，是一种人生态度',
		link : ''
	},{
		text : '“女儿，你不必太善良”，妈妈一番话，唤醒无数人',
		link : ''
	}],
	golook : [{
		img : './static/img/person.jpg',
		name : '星慧',
		degree : '央广台情感节目支持人',
		title : '高情商女人的幸福公开课',
		brief : '会说话，是一个女人最高级的魅力，最稳定的幸福',
		links : ''
	},{
		img : './static/img/person.jpg',
		name : '老路',
		degree : '前京东集团副总裁',
		title : '用得上的职业发展课',
		brief : '50场普通人职场逆袭的必修课',
		links : ''
	},{
		img : './static/img/person.jpg',
		name : '大橘子',
		degree : '新生代知名插画师',
		title : '一学就会，12堂创意DIY手绘课',
		brief : '陈坤御用插画师教你绘制专属日常小物',
		links : ''
	}],
	goodclass : [{
		img : './static/img/gongdu(7).jpg',
		classNum :13,
		orderNum :'1000+',
		title :'人人都需要懂点婚姻法',
		name :'易轶',
		degree :'中央电视台《法律讲堂》主讲律师',
		links :'',
		price : '￥19.9'
	},{
		img : './static/img/gongdu(2).jpg',
		classNum :10,
		orderNum :'6900+',
		title :'10天解锁世界最快的单词记忆法',
		name :'申一帆',
		degree :'《最强大脑》人气选手、世界记忆大师',
		links :'',
		price : '￥19.9'
	}],
	only : [{
		img : './static/img/gongdu(9).jpg',
		classNum :98,
		title :'金庸武侠共读计划',
		name :'有书研究院',
		links :'',
	},{
		img : './static/img/gongdu(8).jpg',
		classNum :90,
		title :'有书青年教师共读计划',
		name :'有书君',
		links :'',
	}],
	
	nav_child : [{
		rank : '职场',
		detail : ['全部','自我管理','技能提升','情商','思维升级'],
		item : [{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		}]
	},{
		rank : '财经',
		detail : ['全部','保险','理财','投资'],
		item : [{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		}]
	},{
		rank : '生活',
		detail : ['全部','健康','旅行','时尚','兴趣','艺术','瑜伽'],
		item : [{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		}]
	},{
		rank : '英语',
		detail : ['全部','零基础','口语','学习方法','职场英语'],
		item : [{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		}]
	},{
		rank : '心理',
		detail : ['全部','心灵成长','情绪管理','基础'],
		item : [{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		}]
	},{
		rank : '文史',
		detail : ['全部','历史','文学','哲学'],
		item : [{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		}]
	},{
		rank : '国学',
		detail : ['全部','入门','经典'],
		item : [{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		}]
	},{
		rank : '亲子',
		detail : ['全部','健康','少儿启蒙','亲子关系'],
		item : [{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		},{
			type : '自我管理',
			img : './static/img/person.jpg',
			title : '23天告别拖延，拿回人生主动权',
			name : '黄河清',
			brief : '23天实战训练，每天收获一个方法，每周收获一个通关大礼，让你的努力可量化'
		}]
	}],
	settings : [
		[{
			icon :'./static/img/interest_v1.png',
			title : '兴趣管理'
		}],
		[{
			icon : './static/img/pic_xiaozu.png',
			title : '小组'
		},{
			icon : './static/img/pic_shujia.png',
			title : '书架'
		},{
			icon : './static/img/pic_shudan.png',
			title : '书单'
		},{
			icon : './static/img/pic_suibi.png',
			title : '随笔·书摘'
		}],
		[{
			icon : './static/img/mybalance_youshudou.png',
			title : '有书豆商城'
		}],
		[{
			icon : './static/img/order_v2.png',
			title : '订单中心'
		},{
			icon : './static/img/gift2_v4.png',
			title : '我的礼物'
		},{
			icon : './static/img/collect_no.png',
			title : '我的收藏'
		},{
			icon : './static/img/pic_lixian.png',
			title : '离线缓存'
		}],
		[{
			icon : './static/img/pic_kefu.png',
			title : '联系客服'
		},{
			icon : './static/img/pic_fenxiang.png',
			title : '分享有书APP'
		}]
	],
	follow : [
		[{
			face : './static/img/1.jpg',
			nickName : '欧阳竹琪',
			sign : '做一个灵魂有香气的女子',
			grade : 14,
			link : ''
		},{
			face : './static/img/2.jpg',
			nickName : '无言',
			sign : '平平淡淡才是真！',
			grade : 16,
			link : ''
		},{
			face : './static/img/3.jpg',
			nickName : '无伤',
			sign : '我从未长大，但我从未停止成长！',
			grade : 0,
			link : ''
		},{
			face : './static/img/4.jpg',
			nickName : '闺女的妈咪',
			sign : '执子之手，共度风霜',
			grade : 19,
			link : ''
		},{
			face : './static/img/5.jpg',
			nickName : 'MaMasang',
			sign : '真诚',
			grade : 17,
			link : ''
		},{
			face : './static/img/6.jpg',
			nickName : '超越自我',
			sign : '万事知足心常乐 人到无求品自高',
			grade : 11,
			link : ''
		},{
			face : './static/img/7.jpg',
			nickName : 'LULU',
			sign : '应无所往，而生其心',
			grade : 2,
			link : ''
		},{
			face : './static/img/8.jpg',
			nickName : '安娜',
			sign : '积极的心',
			grade : 0,
			link : ''
		},{
			face : './static/img/5.jpg',
			nickName : 'MaMasang',
			sign : '真诚',
			grade : 17,
			link : ''
		},{
			face : './static/img/6.jpg',
			nickName : '超越自我',
			sign : '万事知足心常乐 人到无求品自高',
			grade : 11,
			link : ''
		},{
			face : './static/img/7.jpg',
			nickName : 'LULU',
			sign : '应无所往，而生其心',
			grade : 2,
			link : ''
		},{
			face : './static/img/8.jpg',
			nickName : '安娜',
			sign : '积极的心',
			grade : 0,
			link : ''
		}],
		[{
			face : './static/img/5.jpg',
			nickName : 'MaMasang',
			sign : '真诚',
			grade : 17,
			link : ''
		},{
			face : './static/img/6.jpg',
			nickName : '超越自我',
			sign : '万事知足心常乐 人到无求品自高',
			grade : 11,
			link : ''
		},{
			face : './static/img/7.jpg',
			nickName : 'LULU',
			sign : '应无所往，而生其心',
			grade : 2,
			link : ''
		},{
			face : './static/img/8.jpg',
			nickName : '安娜',
			sign : '积极的心',
			grade : 0,
			link : ''
		},{
			face : './static/img/1.jpg',
			nickName : '欧阳竹琪',
			sign : '做一个灵魂有香气的女子',
			grade : 14,
			link : ''
		},{
			face : './static/img/2.jpg',
			nickName : '无言',
			sign : '平平淡淡才是真！',
			grade : 16,
			link : ''
		},{
			face : './static/img/3.jpg',
			nickName : '无伤',
			sign : '我从未长大，但我从未停止成长！',
			grade : 0,
			link : ''
		},{
			face : './static/img/4.jpg',
			nickName : '闺女的妈咪',
			sign : '执子之手，共度风霜',
			grade : 19,
			link : ''
		},{
			face : './static/img/5.jpg',
			nickName : 'MaMasang',
			sign : '真诚',
			grade : 17,
			link : ''
		},{
			face : './static/img/6.jpg',
			nickName : '超越自我',
			sign : '万事知足心常乐 人到无求品自高',
			grade : 11,
			link : ''
		},{
			face : './static/img/7.jpg',
			nickName : 'LULU',
			sign : '应无所往，而生其心',
			grade : 2,
			link : ''
		},{
			face : './static/img/8.jpg',
			nickName : '安娜',
			sign : '积极的心',
			grade : 0,
			link : ''
		},{
			face : './static/img/5.jpg',
			nickName : 'MaMasang',
			sign : '真诚',
			grade : 17,
			link : ''
		},{
			face : './static/img/6.jpg',
			nickName : '超越自我',
			sign : '万事知足心常乐 人到无求品自高',
			grade : 11,
			link : ''
		},{
			face : './static/img/7.jpg',
			nickName : 'LULU',
			sign : '应无所往，而生其心',
			grade : 2,
			link : ''
		},{
			face : './static/img/8.jpg',
			nickName : '安娜',
			sign : '积极的心',
			grade : 0,
			link : ''
		}]
	]
}
