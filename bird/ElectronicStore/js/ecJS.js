$(function(){
	appLog() //刷新页面登录界面出现
	
	//登录界面的消失与出现
	function disLog(){    //消失函数
		$('.logMain').animate({
			top : 0,
			opacity : 0
		},function(){
			$('body').css({
				overflow : 'auto'
			});
			$('.loginalert').hide();
		})
	}
	function appLog(){     //出现函数
		$('.loginalert').show();
		$('body').css({
			overflow : 'hidden'
		})
		$('.logMain').animate({top:100,opacity:1},300)
	}
	$('.logClose').click(function(){  //点击关闭按钮消失
		disLog()
	})
	$('.logMainbox').click(function(){  //点击阴影处消失
		disLog()
	}) 
	$('.login1').click(function(){    //点击小人出现
		appLog()
	})
	$('.logo').click(function(){     //点击logo出现
		appLog();
	})
		//signin与signup切换效果
    $('.logLeft span').click(function(){
     	$(this).addClass('cur').removeClass('pre').siblings().removeClass('cur').addClass('pre');
     	$('.sign').eq($(this).index()).show().siblings().hide();
    });
    
    //搜索框点击出现与消失  
    $('.search').click(function(){
    	if($('.search div').css('top') == '20px'){
    		$('.search div').animate({
	    		height : 57
	    	},100,function(){
	    		$('.search div').css({top:45}).animate({
	    			width : 512
	    		},function(){
	    			$('.search input').animate({opacity:1},100)
	    		})
	    	})
    	}else{
    		$('.search input').css({opacity:0})
    		$('.search div').animate({
    			width : 10
    		},function(){
    			$('.search div').css({top:20}).animate({
    				height : 0
    			})
    		})
    	}
    })
    $('.search div').click(stopPro)
    
    //购物车
    $('.shop').click(function(){
    	stopPro();
    	$('.shopDet').show()
    })
    $('.close').click(function(){
    	$('.shopDet').hide()
    })
    $('.shopDet').click(function(){
    	stopPro();
    })
    
    //导航部分下拉框出现
    $('body').click(function(){
    	$('.pulldown').hide()
    	$('.shopDet').hide()
    	$('.pages').css({color:'#ffffff'});
    	$('.products').css({color:'#ffffff'});
	})
    $('.products').click(function(){
    	$('.pages').css({color:'#ffffff'});
    	stopPro();
    	if($('.pulldown1').css('display') == 'none'){
    		$(this).css({color:'#FF5063'});
    		$('.pulldown1').show();
    		$('.pulldown2').hide()
    	}else{
    		$(this).css({color:'#FFffff'});
    		$('.pulldown1').hide()
    	}
    })
    $('.pages').click(function(){
    	$('.products').css({color:'#ffffff'});
    	stopPro();
    	if($('.pulldown2').css('display') == 'none'){
    		$(this).css({color:'#FF5063'});
    		$('.pulldown2').show();
    		$('.pulldown1').hide()
    	}else{
    		$(this).css({color:'#FFffff'});
    		$('.pulldown2').hide()
    	}
    })
    //手机导航
    $('.detailPro li').click(function(){
    	$(this).addClass('curs').removeClass('pres').siblings().removeClass('curs').addClass('pres');
    	$('.sale').eq($(this).index()).show().siblings().hide();
    });
    //鼠标经过轮播与new product中通用
    ;(function(){
	    var turn = null;
	   	for(var i = 0; i < $('.sales').el.length; i ++){
	   		$('.sales').el[i].num = 0
	   		$('.sales').eq(i).hover(function(){
	   			$('.eye').css({transition : 'all .6s .2s'})
	   			$('.shadow').css({transition : 'all .4s'})
	   			clearInterval(turn);
	   			var _this = this;
	   			turn = setInterval(function(){
	   				var img = _this.querySelectorAll('img');
	   				_this.num  = _this.num < img.length - 1 ?  ++ _this.num : 0
	   				for(var j = 0; j < img.length; j ++){
	   					img[j].style.display = 'none';
	   				}
	   				img[_this.num].style.display = 'block'
	   			},400)
	   		},function(){
	   			$('.eye').css({transition : 'all .6s'})
	   			$('.shadow').css({transition : 'all .4s .3s'})
	   			clearInterval(turn);
	   		})
	   	}
	})();
	
    //倒计时
    ;(function(){
    	var time = 11 * 24 * 60 * 60;
	    var countdown = setInterval(function(){
			time -- ;
			var sec = time % 60 <10 ? '0' + parseInt(time % 60): parseInt(time % 60)  ;
			$('.sec span').html(sec);
			var min = time / 60 % 60 < 10 ? '0' + parseInt(time / 60 % 60)  : parseInt(time / 60 % 60) ;
			$('.min span').html(min);
			var h = time / 60 / 60 % 24 < 10 ? '0' + parseInt(time / 60 / 60 % 24) : parseInt(time / 60 / 60 % 24) ;
			$('.hour span').html(h);
			var d = time / 60 /60 / 24 < 10 ? '0' + parseInt(time / 60 /60 / 24)  : parseInt(time / 60 /60 / 24) ;
			$('.day span').html(d);
			if(time < 1){
				clearInterval(countdown);
			}
		},1000)
    })();
    
    //小轮播图，透明度
    ;(function(){
    	var num = 0;
	    setInterval(function(){
	    	num = num < $('.turn').el.length - 1 ? ++ num : 0;
	    	$('.turn').eq(num).css({opacity : 1}).siblings('.turn').css({opacity:0});
	    	$('.dot span').eq(num).addClass('cur2').removeClass('pre2').siblings().removeClass('cur2').addClass('pre2');
	    },5000)
	    $('.dot span').click(function(){
	    	$(this).addClass('cur2').removeClass('pre2').siblings().removeClass('cur2').addClass('pre2');
	    	$('.turn').eq($(this).index()).css({opacity : 1}).siblings('.turn').css({opacity:0});
	    })
    })();
	    
    //大轮播图 brand左右
	;(function(){
		var flag = true; 
		var go = setInterval(move,3000)
    	function move(){
    		if(flag){
    			flag = false;
				$('.brand ul').animate({marginLeft : -285},1000,function(){
		    		$('.brand ul').el[0].appendChild($('.brand li').el[0]);
		    		$('.brand ul').css({marginLeft : 0})
		    		flag = true;
		    	})
			}
	    }
	    $('.leftArrow').click(function(){
	    	if(flag){
	    		flag = false;
	    		$('.brand ul').el[0].insertBefore($('.brand li').el[4],$('.brand li').el[0]);
		    	$('.brand ul').css({marginLeft : -285})
		    	$('.brand ul').animate({marginLeft : 0},1000,function(){
		    		flag = true;
		    	})
	    	}
	    }).hover(function(){
	    	clearInterval(go)
	    },function(){
	    	go = setInterval(move,3000)
		})	
	    $('.rightArrow').click(move).hover(function(){
	    	clearInterval(go)
	    },function(){
	    	go = setInterval(move,3000)
		})
	})();

    //置顶
    $('.stick').click(function(){
    	$('body').animate({scrollTop : 0},1000)
    })
})