$(function(){
	/*加载头部*/
	$('#header_wrap').load('common.html #header_wrap')
	/*毛笔点击效果*/
	$('.list h3 span').click(function(){
		$(this).parent().css({width:100}).animate({width:1100},500,'easeOut')
	})
	/*点击更多*/
	;(function(){
		var num = 0;
		$('.morebtn').click(function(){
			num ++;
			if(num == 1){
				$('.listall').append($('.lists').clone(true))
			}
			if(num == 2){
				for(var i =0; i < 3; i++){
					$('.lists').last().append($('.lists:first a').eq(i).clone(true))
				}
				$('.more').replaceWith('<img src="img/list_gomore_bg_nomore.jpg"/>')
				$('.morebtn').remove()
			}
		})
	})();
	/*加载底部*/
	$('#footer_wrap').load('common.html #footer_wrap')
	/*加载固定定位*/
	$('.fixed').load('common.html .fixed',function(){
		$('body').append('<script src="js/common.js"><\/script>')
	})
}) 