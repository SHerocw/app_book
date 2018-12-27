function getId(id){
	return document.getElementById(id);
}
function css(el,obj){
	for(var i in obj){
		console.log();
		if(typeof obj[i] == 'number' && i !== 'opacity'){
			obj[i] += 'px';
		}
		el.style[i] = obj[i];
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
function siblings(el){
	var allNode = el.parentNode.childNodes;
	var arr = [];
	for(var i = 0;i < allNode.length;i ++){
		if(allNode[i] !== el && allNode[i].nodeType === 1){
			arr.push(allNode[i]);
		}
	}
	return arr;
}
function firstEle(fir){ // fir.nextSibling.nextSibling.nextSibling
	if(fir.nodeType !== 1){
		return firstEle(fir.nextSibling);
	}else{
		return fir;
	}
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

function click(el,fn){
	el.onclick = fn;
}
function on(el,type,fn){
	if(typeof el.addEventListener == 'undefined'){
		el.attachEvent('on' + type,fn)
	}else{
		el.addEventListener(type,fn,false)
	}
}
function del(el,type,fn){
	if(typeof el.removeEventListener == 'undefined'){
		el.detachEvent('on' + type,fn)
	}else{
		el.removeEventListener(type,fn,false)
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


function getStyle(el,attr){
	if(typeof window.getComputedStyle == 'undefined'){
		return el.currentStyle[attr];
	}else{
		return window.getComputedStyle(el,null)[attr];
	}
}

// c * (t /= d) * t + b; 		t:当前时间 b:初始位置 c:变化量 d:运动时间
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
function animate(el,obj,time,fn,type){
	if(typeof time == 'function' || time == undefined){
		fn = time;
		time = 300;
	}else if(typeof time == 'string'){
		type = time;
		time = 300;
		fn = undefined
	}
	if(typeof fn == 'string'){
		type = fn;
		fn = undefined;
	}
	type = type == undefined ? Tween.easeOut : Tween[type];
	var t = 0; // 当前次数
	var z = 16.6
	var d = time / z // 总次数
	var start = {}; // 用对象储存可以存入多个值，且属性名与obj相同，可以在obj的循环中使用它的变量
	clearInterval(el.time); // 给不同标签添加定时器，清除对应标签的定时器
	el.time = setInterval(function(){
		t ++;
		var flag = true;
		for(var i in obj){
			if(t >= parseInt(d)){
				el.style[i] = obj[i] + 'px'
			}else{
				if(start[i] == undefined) start[i] = parseFloat(getStyle(el,i));
				var c = obj[i]-start[i];
				var b = start[i];
				el.style[i] = i == 'opacity' ? type(t,b,c,d) : type(t,b,c,d) + 'px';
				flag = false;
			}
		}
		if(flag){
			clearInterval(el.time);
			fn !== undefined ? fn() : '';
		}
	},z)
	
}