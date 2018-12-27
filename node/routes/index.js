var express = require('express');
var router = express.Router();
var mongo = require('./Mongo');
var crypto = require('crypto');
var ObjectID = require('mongodb').ObjectID;
/* GET home page. */
router.post('/AdminLoginAndRegHandler', function(req, res, next) {
	if(req.query.action == 'add'){
		mongo('administors','find',{
			username : req.body.username
		},function(result){
			if(result.length == 0){
				mongo('administors','find',{},function(result){
					var hash = crypto.createHash('sha1');
					var pass = hash.update(req.body.password).digest('hex')
					var data = {
						createAt : new Date(),
						isdelete : /^fcgl/.test(req.body.turename) ? false : true,
						password : pass,
						phone: req.body.phone,
						power : req.body.powerCode == 1 ? '系统管理员' : '课程管理员',
						powerCode : req.body.powerCode,
						success : '成功',
						tokenId : result.length + 1,
						turename : req.body.turename,
						upDateAt :new Date(),
						username : req.body.username
					}
					mongo('administors','insert',data,function(result){
						res.send({
							success:'成功'
						})
					})
				})
			}else{
				res.send({
					err:'重复注册'
				})
			}
		})
	}else if(req.query.action == 'login'){
		var hash = crypto.createHash('sha1');
		var pass = hash.update(req.body.password).digest('hex')
		mongo('administors','find',{
			username : req.body.username
		},function(result){
			if(result.length !== 0){
				mongo('administors','find',{
					username : req.body.username,
					password : pass
				},function(result){
					if(result.length !== 0){
						req.session.userId = result[0]._id;
						res.send({
							success : '登录成功'
						})
					}else{
						res.send({
							err : '密码错误'
						})
					}
				})
			}else{
				res.send({
					err : '查无此人'
				})
			}
		})
	}
	else if(req.query.action == 'returnuserinfo'){
		mongo('administors','find',{
			_id : new ObjectID(req.session.userId)
		},function(result){
			res.send({
				success : '成功',
				data : {
					turename : result[0].turename,
					tokenId : result[0].tokenId,
					phone : result[0].phone,
					time : result[0].createAt
				}
			})
		})
	}
});
router.get('/AdminLoginAndRegHandler', function(req, res, next) {
	if(req.query.action == 'verification'){
		var code = 'abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
		var str = '';
		for(i = 0;i < 4; i ++){
			var random = Math.floor(Math.random() * 62)
			str += code.charAt(random)
		};
		req.session.veri = str;
		res.send({
			success : '获取验证码成功',
			data : str
		});
	}else if(req.query.action == 'checkVerification'){
		if(req.query.veri == req.session.veri){
			res.send({
				success : '验证码正确'
			})
		}else{
			res.send({
				success : '验证码错误'
			})
		}
	}
});

module.exports = router;