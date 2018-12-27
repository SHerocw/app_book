var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var session = require('express-session')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// 加载express-session插件，本地储存
// 先加载session然后加载路由
app.use(session({
	name:"fcht",// 存储session_id的cookie的名称   
				//  默认 connect.sid
	secret:"fcht",// 加密的字符串   必须的
	cookie:{
		maxAge:8000000000 // 设置cookie的失效时间 3600000
	},
	resave:false,//每次请求是否都重新设置session
	saveUninitialized:false // 每次请求是否初始化session
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/VueHandler', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
