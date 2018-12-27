// c * (t /= d) * t + b; 		t:当前时间 b:初始位置 c:总路程 d:运动时间
var Tween = {
	Linear : function(t,b,c,d){ // 匀速
		return c * t / d + b
	},
	easeIn : function(t,b,c,d){ // 先慢后快
		return c * (t /= d) * t + b; 
	},
	easeOut : function(t,b,c,d){ // 先快后慢
		return -c * (t /= d) * (t - 2) + b; 
	}
}

function getStyle(el,attr){
	if(typeof window.getComputedStyle == 'undefined'){
		return el.currentStyle[attr];
	}else{
		return window.getComputedStyle(el,null)[attr];
	}
}
function getInner(){
	if(typeof innerWidth == 'undefined'){
		return {
			w : document.documentElement.clientWidth,
			h : document.documentElement.clientHeight
		}
	}else {
		return {
			w : innerWidth,
			h : innerHeight
		}
	}
}
function hasClass(classN,el){
	return new RegExp('(^|\\s+)' + classN + '($|\\s+)').test(el.className);
}
function disSpace(str){
	return str.replace(/^\s+|\s+$/g,'')
}
function getScreenPosition(){
	if(typeof screenLeft == 'undefined'){
		return {
			x : screenX,
			y : screenY
		}
	}else {
		return {
			x : screenLeft,
			y : screenTop
		}
	}
}
function stopPro(evt){
	var e = evt || window.event;
	if(evt == undefined){
		e.cancelBubble = true;
	}else{
		e.stopPropagation();
	}
}
function preDefault(evt){
	var e = evt || window.event;
	if(evt == undefined){
		e.returnValue = false;
	}else{
		e.preventDefault();
	}
}
function getEvtBtn(evt){
	var e = event || window.event; // 标准化event
	if(evt == undefined){ // ie
		switch(e.button){
			case 1:
				return 0;
			case 2:
				return 2;
			case 4:
				return 1;
		}
	}else{
		return e.button;
	}
}
function getDetail(e){
	if(e.detail){
		return e.detail * -40
	}else{
		return e.wheelDelta;
	}
}

function $(str){
	if(str == document || str == window){
		var el = [str];
	}else if(typeof str == 'function'){
		window.onload = str;
	}else if(str.nodeType == 1 && typeof str == 'object'){
		var el = [str];
	}else{
		var el = document.querySelectorAll(str); // [#box]
	}
	return new Obj(el); // 1
}
function Obj(el){
	this.el = el; // 2
}
Obj.prototype = {
	siblings : function (theName){ // 获取所有兄弟元素
		var arr = [];
		for(var i = 0;i < this.el.length;i ++){
			var allNode = theName === undefined ? this.el[i].parentNode.childNodes : 
												this.el[i].parentNode.querySelectorAll(theName);
			for(var j = 0;j < allNode.length;j ++){
				if(allNode[j] !== this.el[i] && allNode[j].nodeType === 1) arr.push(allNode[j]);
			}
		}
		this.el = arr;
		return this;
	},
	append : function(obj){
		for(var i = 0;i < this.el.length;i ++){
			this.el[i].appendChild(obj.el[0]);
		} 
		return this;
	},
	css : function(attr,value){ // 设置css
		for(var i = 0;i < this.el.length;i ++){
			if(typeof attr === 'string' && typeof value === 'string'){
				this.el[i].style[attr] = value;
			}else if(typeof attr === 'string' && value === undefined){
				return getStyle(this.el[i],attr);
			}else if(typeof attr === 'object' && value === undefined){
				for(var j in attr){
					if(j == 'opacity' || j.match(/^background/) || typeof attr[j] == 'string') this.el[i].style[j] = attr[j];
					else this.el[i].style[j] = attr[j] + 'px';
				}
			}
		}
		return this;
	},
	val : function(value){ // 操作form组件的value属性
		for(var i = 0;i < this.el.length;i ++){
			if(value !== undefined){ // 传参数设置表单组件的value
				this.el[i].value = value;
			}else{ // 不传参数获取表单组件的value
				return this.el[i].value;
			}
		}
		return this;
	},
	addClass : function(classN){ // 添加class名
		for(var i = 0;i < this.el.length;i ++){
			if(!hasClass(classN,this.el[i])){
				this.el[i].className = disSpace(this.el[i].className + ' ' + classN);
			}
		}
		return this;
	},
	removeClass : function(classN){ // 清除指定class名
		for(var i = 0;i < this.el.length;i ++){
			var arr = this.el[i].className.split(' ');
			for(var j = 0;j < arr.length;j ++){
				if(arr[j] == classN){
					arr.splice(j,1);
				};
			}
			this.el[i].className = arr.join(' ');
		}
		return this;
	},
	index : function(){ // 获取当前元素的下标
		for(var i = 0;i < this.el.length;i ++){
			var allNode = this.el[i].parentNode.children; // 获取所有元素子节点
			for(var j = 0;j < allNode.length;j ++){
				if(allNode[j] == this.el[i]) return j;
			}
		}
	},
	eq : function(index){ // 获取第N个元素
		this.el = [this.el[index]];
		return this;
	},
	html : function(str){ // 设置元素的innerHTML
		for(var i = 0;i < this.el.length;i ++){
			if(str !== undefined){ // 设置
				this.el[i].innerHTML = str;
			}else{ // 获取
				return this.el[i].innerHTML;
			}
		}
		return this;
	},
	show : function(){ // 显示
		for(var i = 0;i < this.el.length;i ++){
			this.el[i].style.display = 'block';
		}
		return this;
	},
	hide : function(){ // 隐藏
		for(var i = 0;i < this.el.length;i ++){
			this.el[i].style.display = 'none';
		}
		return this;
	},
	click : function(callback){ // 点击
		for(var i = 0;i < this.el.length;i ++){
			this.el[i].onclick = callback;
		}
		return this;
	},
	hover : function(mouseover,mouseout){ // 鼠标经过离开
		for(var i = 0;i < this.el.length;i ++){
			this.el[i].onmouseover = mouseover;
			this.el[i].onmouseout = mouseout;
		}
		return this;
	},
	on : function(type,callback){ // 现代事件加载
		for(var i = 0;i < this.el.length;i ++){
			if(typeof this.el[i].addEventListener == 'undefined'){
				this.el[i].attachEvent('on' + type,callback)
			}else{
				this.el[i].addEventListener(type,callback,false)
			}
		}
		return this;
	},
	del : function(type,callback){ // 现代事件卸载
		for(var i = 0;i < this.el.length;i ++){
			if(typeof this.el[i].removeEventListener == 'undefined'){
				this.el[i].detachEvent('on' + type,callback)
			}else{
				this.el[i].removeEventListener(type,callback,false)
			}
		}
		return this;
	},
	ajax : function(obj){
		var xhr = new XMLHttpRequest();
		var str = '';
		var arr = [];
		obj.async = obj.async == undefined ? true : obj.async;
		obj.type = obj.type == undefined ? 'get' : obj.type;
		for(var i in obj.data){
			arr.push(i + '=' + obj.data[i])
		}
		var data = arr.join('&');
		if(obj.type == 'get'){
			str += obj.url.indexOf('?') < 0 ? '?' + data : '&' + data;
		}
		if(obj.async){
			xhr.onreadystatechange = function(){ // 1 2 3 4
				if(xhr.readyState == 4 && xhr.status == 200)obj.success(xhr.responseText);
			}
		}
		xhr.open(obj.type,obj.url + str,obj.async);
		if(obj.type == 'post'){
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.send(data);
		}else{
			xhr.send(null);
		}
		if(!obj.async){
			if(xhr.status == 200) obj.success(xhr.responseText);
		}
	},
	animate : function(obj,time,fn,type){ // 动画
		if(typeof fn == 'string'){
			type = fn;
			fn = undefined;
		}
		if(typeof time == 'function' || time == undefined){
			fn = time;
			time = 300;
		}else if(typeof time == 'string'){
			type = time;
			time = 300;
			fn = undefined
		}
		var _this = this;
		var z = 16.6;
		var d = time / z // 总次数
		var t = 0; // 当前次数
		var ele = this.el;
		type = type == undefined ? Tween.easeOut : Tween[type];
		var start = {}; // 用对象储存可以存入多个值，且属性名与obj相同，可以在obj的循环中使用它的变量
		clearInterval(ele.time); // 给不同标签添加定时器，清除对应标签的定时器
		ele.time = setInterval(function(){
			t ++;
			for(let k = 0;k < ele.length;k ++){
				var flag = true;
				for(var i in obj){
					if(t >= parseInt(d)){
						if(i == 'scrollTop'){
							ele[k].scrollTop = obj[i];
						}else{
							ele[k].style[i] = i == 'opacity' ? obj[i] : obj[i] + 'px';
						}
					}else{
						if(start[i] == undefined){
							start[i] = i == 'scrollTop' ? ele[k].scrollTop : parseFloat(getStyle(ele[k],i));
						} 
						var c = obj[i] - start[i];
						var b = start[i];
						if(i == 'scrollTop'){
							ele[k].scrollTop = type(t,b,c,d);
						}else{
							ele[k].style[i] = i == 'opacity' ? type(t,b,c,d) : type(t,b,c,d) + 'px';
						}
						flag = false;
					}
				}
				if(flag){
					clearInterval(ele.time);
					fn !== undefined ? fn() : '';
				}
			}
		},z)
		return this;
	}
}