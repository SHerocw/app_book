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
function getStyle(el,attr){
	if(typeof window.getComputedStyle == 'undefined'){
		return el.currentStyle[attr];
	}else{
		return window.getComputedStyle(el,null)[attr];
	}
}
function animate(el,obj,t,fn){
	if(typeof t == 'function' || t == undefined){
		fn = t;
		t = 300;
	}
	var start = {}; // 用对象储存可以存入多个值，且属性名与obj相同，可以在obj的循环中使用它的变量
	clearInterval(el.time); // 给不同标签添加定时器，清除对应标签的定时器
	el.time = setInterval(function(){
		var flag = true; // 代表全部走完
		for(var i in obj){
			if(start[i] == undefined) start[i] = parseFloat(getStyle(el,i));
			
			var cur = parseFloat(getStyle(el,i));
			var step = (obj[i] - start[i]) / t * 60;

			if(Math.abs(obj[i] - cur) > Math.abs(step)){
				el.style[i] = i == 'opacity' ? cur + step : cur + step + 'px';
				i == 'opacity' ? 
				el.style.filter = 'alpha(opacity=' + (cur + step) * 100 + ')' : null;
				flag = false;
			}else{
				el.style[i] = i == 'opacity' ? obj[i] : obj[i] + 'px';
				i == 'opacity' ? 
				el.style.filter = 'alpha(opacity=' + obj[i] * 100 + ')' : null;
			}
		}
		if(flag){
			clearInterval(el.time);
			fn !== undefined ? fn() : '';
		}
	},60)
}