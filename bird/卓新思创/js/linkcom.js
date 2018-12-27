$(function(){
	/*加载头部*/
	$('#header_wrap').load('common.html #header_wrap')
	/*毛笔点击效果*/
	$('.maincon h3 span').click(function(){
		$(this).parent().css({width:100}).animate({width:780},500,'easeOut')
	})
	/*点赞效果*/
	var count = 0
	var arr = ['娘娘威武','皇上万岁，万万岁','爱死你啦、MUA~','再点一下试试']
	$('.like').click(function(){
		count ++;
		$('.hint').html(arr[parseInt(Math.random()*4 - 0.01)]).show().css({opacity:0}).animate({opacity:1,top:100},function(){$('.like').animate({backgroundPositionY:-73}).css({cursor:'default'});}).delay(100).animate({opacity:0,left:-180},function(){
			$('.like span').html('喜欢（21）')
			$(this).hide();
			arr = []; 
			if($('.hint').html() == '再点一下试试'){
				if(count==1){
					$('.hint').html('喊你点就点嗦~傻').css({opacity:0,top:-40,left:-56}).hide()
				}else{
					$('.hint').show().animate({opacity:1,top:100}).delay(100).animate({opacity:0,left:-180});
				}
			}else{
				$('.hint').remove()
			}
		});
	});
	/*加载底部*/
	$('#footer_wrap').load('common.html #footer_wrap')
	/*加载固定定位*/
	$('.fixed').load('common.html .fixed',function(){
		$('body').append('<script src="js/common.js"><\/script>')
	})
	/*ajax请求数据*/
	var num = location.hash.substr(1);
	$.ajax({
		url:"linkdata.json",
		success:function(res){
			$('.maincon h1').append(res[num].name);
			$('.maincon h2').append(res[num].english);
			$('.maincon h3').append(res[num].title);
			$('.maincon .picture').append('<img src="'+res[num].src+'"/>');
			console.log(res)
		}
	});
})