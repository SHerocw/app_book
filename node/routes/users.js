var express = require('express');
var router = express.Router();

var http = require('http').createServer();
var io = require('socket.io')(http)

/* GET users listing. */
//router.get('/', function(req, res, next) {
//res.send('respond with a resource');
//});

var users = [];
var num = 0;
var allMsg = [];

io.on('connection',function(socket){
		router.get('/getMsg',function(req,res){
		if(req.query.action == 'getmsg'){
			res.send(allMsg)
		}
	})
	socket.on('login',function(data){
		var result = users.some((v) => {
			return v.tokenId == data.tokenId
		})
		if(!result){
			num ++;
			users.push(data)
		}
		io.emit('login',{
			num,
			users
		})
	})
	
	socket.on('message',function(data){
		io.emit('message',data)
		allMsg.push(data)
	})
	
})
http.listen(4000)

module.exports = router;
