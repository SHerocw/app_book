//加载MongoDB模块
var mongodb = require('mongodb');
//获取MongoDB数据库地址
const URL = 'mongodb://127.0.0.1:27017';
//获取MongoDB客户端资源句柄
var MongoClient = mongodb.MongoClient;

var DB = 'fcht';
//链接MongoDB
function insert(collection,data,callback){
	collection.insert(data,function(err,result){
		if(err){
			console.log(err);
		}else{
			callback(result)
		}
	})
}
function deleteOne(collection,data,callback){
	collection.deleteOne(data,function(err,result){
		if(err){
			console.log(err);
		}else{
			callback(result)
		}
	})
}
function updateOne(collection,data,callback){
	collection.updateOne(data[0],data[1],function(err,result){
		if(err){
			console.log(err);
		}else{
			callback(result)
		}
	})
}
function find(collection,data,callback){
	collection.find(data).toArray(function(err,result){
		if(err){
			console.log(err);
		}else{
			callback(result)
		}
	})
}
var fn = {
	insert,
	deleteOne,
	updateOne,
	find
}
module.exports = function MongoConnect(collectionName,type,data,callback){
	// 链接mongodb
	MongoClient.connect(URL,function(err,client){
		if(err){
			console.log(err)
		}else{
			console.log('链接成功！');
			// 获取指定数据库的资源句柄
			var db = client.db(DB);
			/*			cmd 		node
				添加	insert 		insert
				删除	remove 		deleteOne
				修改	update 		updateOne
				查找	find 		find
			*/
			// 获取数据库中某个集合
			var collection = db.collection(collectionName);
			fn[type](collection,data,callback);
		}
	})
}
//function find(collection,data,callback){
//	collection.find(data).toArray(function(err,result){
//		if(err){
//			console.log(err);
//		}else{
//			callback(result)
//		}
//	})
//}
//var fn = {
//	insert,
//	find,
//	updataOne,
//	deleteOne
//}
//function MongoConnect(collectionName,type,data,callback){
//	MongoClient.connect(URL,function(ree,client){
//		var db = client.db(DB);
//		var collection = db.collection(collectionName)
//		fn[type](collection,data,callback)
//	})
//}

//MongoClient.connect(URL,function(err,client){
//	if(err){
//		console.log(err)
//	}else{
//		console.log('连接成功');
//		//获取指定数据库
//		var db = client.db('test');
//		//获取数据库中指定集合
//		var collection = db.collection('abc')
//		//查询数组，以数组格式返回
////		collection.find().toArray(function(err,result){
////			console.log(result)
////			client.close()
////		})
//		//添加数据
////		collection.insert({name:'xiaoming',age:23},function(err,result){
////			if(err){
////				console.log(err)
////			}else{
////				console.log('操作成功')
////				if(result.result.n == 1){
////					console.log('添加成功')
////				}
////				client.close()
////			}
////		})
//		//修改数据
////		collection.updateOne({age:23},{$set:{name:'xiaomi'}},function(err,result){
////			if(err){
////				console.log(err)
////			}else{
////				console.log('操作成功')
////				if(result.result.n == 1){
////					console.log('修改成功')
////				}
////				client.close()
////			}
////		})
////		//删除数据
//		collection.deleteOne({age:23},function(err,result){
//			if(err){
//				console.log(err)
//			}else{
//				console.log('操作成功')
//				if(result.result.n == 1){
//					console.log('删除成功')
//				}
//				client.close()
//			}
//		})
//	}
//})
