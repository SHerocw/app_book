var hleft = document.getElementById("hleft");
var hleftsh = document.getElementById("hleftsh");
var h3 = document.getElementById("h3");
var h3sh = document.getElementById("h3sh");
var sn1 = document.getElementById("sn1");
var sn2 = document.getElementById("sn2");
var sn3 = document.getElementById("sn3");
var ezjt = document.getElementById("ezjt");
var eyjt = document.getElementById("eyjt");
var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");
var dot3 = document.getElementById("dot3");
var dot4 = document.getElementById("dot4");
var longb = document.getElementById("longb");
var zuojt = document.getElementById("zuojt");
var youjt = document.getElementById("youjt");
var elong = document.getElementById("elong");
var num = 0;
var numx = 0;
hleft.onclick  = function(){
	pulldown.style.height = "170px";
	hleftsh.style.display = "block";
	pulldown2.style.height = "0px";
	h3sh.style.display = "none";
}
hleftsh.onclick = function(){
	pulldown.style.height = "0px";
	hleftsh.style.display = "none";
}
h3.onclick = function(){
	pulldown2.style.height = "240px";
	h3sh.style.display = "block";
	pulldown.style.height = "0px";
	hleftsh.style.display = "none";
}
h3sh.onclick = function(){
	pulldown2.style.height = "0px";
	h3sh.style.display = "none";
}
sn1.onclick = function(){
	sn1.style.borderBottom = "5px solid #F66F6A";
	sn2.style.borderBottom = "5px solid #f5f5f5";
	sn3.style.borderBottom = "5px solid #f5f5f5";
	select11.style.display = "block";
	select12.style.display = "none";
	select13.style.display = "none";
}
sn2.onclick = function(){
	sn2.style.borderBottom = "5px solid #F66F6A";
	sn1.style.borderBottom = "5px solid #f5f5f5";
	sn3.style.borderBottom = "5px solid #f5f5f5";
	select12.style.display = "block";
	select11.style.display = "none";
	select13.style.display = "none";
}
sn3.onclick = function(){
	sn3.style.borderBottom = "5px solid #F66F6A";
	sn2.style.borderBottom = "5px solid #f5f5f5";
	sn1.style.borderBottom = "5px solid #f5f5f5";
	select13.style.display = "block";
	select12.style.display = "none";
	select11.style.display = "none";
}
dot1.onclick = function(){
	longb.style.transform = "translateX(-1366px)";
	dot1.style.background = "#777777";
	dot2.style.background = "#ffffff";
}
dot2.onclick = function(){
	longb.style.transform = "translateX(0px)";
	dot2.style.background = "#777777";
	dot1.style.background = "#FFFFFF";
}
youjt.onclick = function(){
	num = num + 1;
	longb.style.transform = "translateX(" + num * -1366 + "px)";
}
zuojt.onclick = function(){
	num = num - 1;
	longb.style.transform = "translateX(" + num * -1366 + "px)";
}
eyjt.onclick = function(){
	numx = numx + 1;
	elong.style.transform = "translateX(" + numx * -1128 + "px)";
}
ezjt.onclick = function(){
	numx = numx - 1;
	elong.style.transform = "translateX(" + numx * -1128 + "px)";
}
dot3.onclick = function(){
	elong.style.transform = "translateX(-1128px)";
	dot3.style.background = "#777777";
	dot4.style.background = "#ffffff";
}
dot4.onclick = function(){
	elong.style.transform = "translateX(0px)";
	dot4.style.background = "#777777";
	dot3.style.background = "#FFFFFF";
}