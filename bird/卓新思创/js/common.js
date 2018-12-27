$(function(){
	/*头部导航鼠标事件*/
	$('.nav_wrap li').bind({
		click : function(){
			$(this).find('p').addClass('cur').parent().siblings().find('p').removeClass('cur');
			$(this).find('dl').hide()
		},
		mouseenter : function(){
			$(this).find('dl').stop().slideDown(400,'bounceOut').parent().siblings().find('dl').hide();
		},
		mouseleave : function(){
			$(this).find('dl').slideUp(200);
		}
	})
	
	/*右侧置顶邮箱固定定位*/
	$(window).scroll(function(){
		if($(window).scrollTop() >= 720){
			$('.fixed').show()
		}else{
			$('.fixed').hide()
		}
	})
	$('.fixed .stick').click(function(){
		$('html,body').animate({scrollTop:0})
	})
})