$(function(){
	/*获取从别的页面得到的num值*/
	var num = 0 || location.hash.substr(1);
	/*双击提前消失*/
	$('.gif').dblclick(function(){
		$(this).stop(true,true).slideUp()
	})
	/*num = 0动画显示,若跳转的不是主页则没有动画*/
	if(num == 0){
		$('.gif').show().delay(4000).animate({padding:'5%'}).delay(5300).slideUp().find('h1').delay(4500).fadeIn().animate({margin:0}).next().delay(4700).fadeIn().animate({margin:0}).next().delay(4700).fadeIn().animate({margin:0}).next().delay(4900).fadeIn().animate({margin:0}).next().delay(5100).fadeIn().animate({margin:0})
	}
	$('.fullfirst').animate({marginTop : -num * $('body').height()})
	var flag = true;
	/*第一屏下一页按钮*/
	$('.gonext').click(function(){
		num = 1;
		$('.fullfirst').animate({marginTop:-$('body').height()})
	})
	/*右按钮鼠标经过停止*/
	$('.fullright').mouseover(function(){
		$(this).removeClass('cur')
	})
	/*滚轮控制轮播切换*/
	$(document).on('mousewheel DOMMouseScroll',function(e){
		var detail = e.originalEvent.wheelDeltaY || e.originalEvent.detail * -40;
		if(flag && $('.gif').is(':hidden')){
			flag = false;
			if(detail > 0){
				num = num <= 0 ? 0 : --num;
			}else{
				num = num >= $('.full').length - 1 ? $('.full').length - 1 : ++num;
			}
			$('.fullfirst').animate({
				marginTop : -num * $('body').height()
			},function(){
				flag = true;
			})
		}
		if(num == 4){
			$('.fixnav li').eq(4).addClass('cur').prev().addClass('cur').prevAll().removeClass('cur')
		}else if( num >0){
			$('.fixnav li').eq(num-1).addClass('cur').siblings().removeClass('cur')
		}
	})
	/*点击导航控制轮播切换*/
	$('.fixnav li').click(function(){
		if($(this).index() == 3 || $(this).index() == 4){
			num = 4;
			$('.fixnav li').eq(4).addClass('cur').prev().addClass('cur').prevAll().removeClass('cur')
		}else if($(this).index() < 3){
			num = $(this).index() + 1 ;
			$(this).addClass('cur').siblings().removeClass('cur')
		}
		$('.fullfirst').animate({marginTop:-num * $('body').height()})
	})
	
	/*概述轮播图*/
	var no = 0;
	/*判断边界,若到边界按钮透明度改变*/
	$(window).click(function(){
		if(no == 0){
			$('.fullleft').css('opacity',0.6)
		}else{
			$('.fullleft').css('opacity',1)
		}
		if(no == 2){
			$('.fullright').css('opacity',0.6)
		}else{
			$('.fullright').css('opacity',1)
		}
	})
	$('.fullsecond>div').width($('body').width())
	$('.fullleft').click(function(){
		no = no <= 0 ? 0 : --no;
		$('.fullsecond').animate({marginLeft:-no * $('body').width()})
	})
	$('.fullright').click(function(){
		no = no >= 2 ? 2 : ++no;
		$('.fullsecond').animate({marginLeft:-no * $('body').width()})
	})
	/*价值四角效果*/
	setInterval(function(){
		$('.border').find('.none').fadeToggle(1000)
	},2000)
	/*小鸟掌云轮播*/
	$('.fchange span').click(function(){
		$(this).index() == 1 ? 
		$(this).addClass('cur').removeClass('prer').siblings().removeClass('cur').addClass('prel') :
		$(this).addClass('cur').removeClass('prel').siblings().removeClass('cur').addClass('prer')
		$('.ftext').animate({marginLeft:- $(this).index() * 910});
	});
	/*窗口改变大小宽高随之改变*/ 
	function rechange(){
		if($('body').width()>1100){
			$('.fullsecond>div,.full').width($('body').width());
			$('.fullsecond').width($('body').width()*3);
		}else{
			$('.fullsecond>div,.full').width(1100);
			$('.fullsecond').width(3300);
		}
		$('.full,.fullsecond>div').css('height',$('body').height());
		$('.fullfirst').css('marginTop' , -num * $('body').height());
		$('.fullsecond').css({marginLeft:-no * $('.fullsecond>div').width()});
	}
	$(window).resize(rechange);
	if($(window).scrollTop() < 2000){
		setInterval(rechange,400)
	}
})    
