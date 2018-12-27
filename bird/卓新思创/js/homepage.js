$(function(){
	/*加载头部导航*/
	$('#header_wrap').load('common.html #header_wrap')
	/*大banner*/
	;(function(){
		var num = 0;
		function no1(){
			$('.ban11').css({top:204,left:0,opacity:0}).animate({left:343,opacity:1}).next().css({top:300,left:'100%',opacity:0},500).delay(400).animate({left:375,opacity:1},600,'bounceOut');
		}
		function no2(){
			$('.ban21').css({top:177,left:0,opacity:0}).animate({left:61,opacity:1}).next().css({top:70,left:'100%',opacity:1},800).animate({left:261,opacity:1},600,'bounceOut');
		}
		function no3(){
			$('.ban31').css({top:189,left:0,opacity:0}).animate({left:384,opacity:1}).next().css({top:298,left:'100%',opacity:0},500).delay(400).animate({top:298,left:397,opacity:1},600,'bounceOut');
		}
		no1()
		function which(){
			switch(num){
				case 0 : no1(); break;
				case 1 : no2(); break;
				case 2 : no3(); break;
			}
		}
		function change(){
			$('.banner').eq(num).stop(true,true).fadeIn(500).siblings('.banner').fadeOut(500);
			$('.banner_wrap i').eq(num).addClass('cur').siblings().removeClass('cur')
		}
		$('.banner_wrap .prev').click(function(){
			num = (--num + 3) % ($('.banner').length);
			change();
			which();
		})
		$('.banner_wrap .next').click(function(){
			num = (++num) % ($('.banner').length);
			change();
			which();
		})
		$('.banner_wrap i').click(function(){
			$(this).addClass('cur').siblings().removeClass('cur');
			$('.banner').eq($(this).index()).stop(true,true).fadeIn(500).siblings('.banner').fadeOut(500);
			num = $(this).index();
			which();
		})
	})();
	/*主要产品轮播*/
	;(function(){
		var num = 0;
		function goLeft(){
			num = num <= 0 ? $('.proban_wrap').length - 1 : --num;
			ani('100%',400);
		}
		function goRight(){
			num = num >= $('.proban_wrap').length - 1 ? 0 : ++num;
			ani('-100%',-200)
		}
		$('.product .prev').click(goLeft);
		$('.product .next').click(goRight);
		function ani(val1,val2){
			$('.proban_wrap').eq(num).show().css({right:val1,opacity:0}).animate({right:0,opacity:1},1000).siblings().hide();
			$('.proban_wrap').eq(num).find('.proright').css('right',val2).animate({right:0},1000)
			$('.product li').eq(num).find('span').hide().next().show().parent().siblings().find('span').show().next().hide();
		};
		$('.product li').click(function(){
			if(num < $(this).index()){
				num = $(this).index()
				ani('-100%',-200);
			}else if(num > $(this).index()){
				num = $(this).index()
				ani('100%',400);
			}
		})
	})();
	/*业务范围*/
	;(function(){
		$('.sign,.switch').click(function(){
			if($(this).parent().next().css('display') == 'none'){
				$(this).parent().next().delay(500).slideDown(200).parent().find('.switch').css('backgroundPosition','0 -67px');
				$(this).parents('.buscon').siblings().find('.bus_detail').slideUp().parent().find('.switch').css('backgroundPosition','0 0');
			}else{
				$(this).parent().next().slideUp().parent().find('.switch').css('backgroundPosition','0 0');
			}
		})
	})();
	/*团队介绍*/
	;(function(){
		var num = 0;
		var time = null;
		time = setInterval(goright,4000)
		$('.team .next').click(goright);
		$('.team .prev').click(goleft);
		$('.team .change,.teamban').hover(function(){
			clearInterval(time)
		},function(){
			time = setInterval(goright,4000)
		})
		function goright(){
		 	num = (++num) % ($('.teams').length);
		 	$('.teamban').stop(true,false).animate({marginLeft:-1100},1000,'backIn',function(){
		 		$(this).append($('.teams').first()).css('marginLeft',0)
		 	});
		 	$('.team .change i').eq(num).addClass('cur').siblings().removeClass('cur');
		}
		function goleft(){
			num = (--num + $('.teams').length) % ($('.teams').length);
			$('.teamban').prepend($('.teams').last()).css('marginLeft',-1100).stop(true,false).animate({marginLeft:0},1000,'backIn');
			$('.team .change i').eq(num).addClass('cur').siblings().removeClass('cur');
		}
	})();
	/*地图插件*/
	;(function(){
		var map = new BMap.Map("allmap");
		var poi = new BMap.Point(116.356, 40.094);
		map.centerAndZoom(poi, 15);
		map.addControl(new BMap.MapTypeControl({
			mapTypes:[
	            BMAP_NORMAL_MAP,
	            BMAP_HYBRID_MAP
	        ]}));	  
		map.setCurrentCity("北京");
		var top_left_navigation = new BMap.NavigationControl();
		map.addControl(top_left_navigation); 
		var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
                    '<img src="img/xiaoniao_icon.png" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
                    '地址：北京市昌平区站前东街2号<br/>电话：(010)028-88888888<br/>简介：田园风光综合商业楼3层，为小鸟掌学综合研发及办公地址' +
                  '</div>';
        var searchInfoWindow = null;
		searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
				title  : "卓新思创",      //标题
				width  : 290,             //宽度
				height : 105,              //高度
				panel  : "panel",         //检索结果面板
				enableAutoPan : true,     //自动平移
				searchTypes   :[
					BMAPLIB_TAB_SEARCH,   //周边检索
					BMAPLIB_TAB_TO_HERE,  //到这里去
					BMAPLIB_TAB_FROM_HERE //从这里出发
				]
		});
		var marker = new BMap.Marker(poi);
		marker.setAnimation(BMAP_ANIMATION_BOUNCE); 
	    marker.addEventListener("click", function(e){
		    searchInfoWindow.open(marker);
	    })
	    map.addOverlay(marker); 
	})();
	/*加载底部*/
	$('#footer_wrap').load('common.html #footer_wrap')
	/*加载固定定位*/
	$('.fixed').load('common.html .fixed',function(){
		$('body').append('<script src="js/common.js"><\/script>')
	})
})