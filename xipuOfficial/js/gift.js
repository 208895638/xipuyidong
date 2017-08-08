$(function(){
	var gift={		
		init:function(){
			this.bindEvent();
			this.swiper();
			this.getNum();
			this.copy();
		},
		bindEvent:function(){
			var that=this;
			//后退键
			$(".header span").on("click",function(){
				window.history.back();
			});
			//sidebar切换
			$(".header i").on("click",function(){
				$(".sideBar").fadeIn();
			});
			//sidebar点x号消失
			$(".sideBar h4").on("click",function(){
				$(".sideBar").fadeOut();
			});
			//领取礼包点差号消失
			$(".drawCon em").on("click",function(){
				$(".drawGift").fadeOut();
			})
			//领取礼包弹出领取礼包界面
			$(".giftPer button").on("click",function(){
				$(".drawGift").fadeIn();
			})
		},
		render:function(){
			var that=this;
			
		},
		swiper:function(){
			var swiper = new Swiper('.bans', {
		        pagination: '.swiper-pagination',
		        loop:true,
		        autoplay : 2000,
		    });
		},
		getNum:function(){//获取数目执行方法
			$(function(){
				var i=$(".giftCon ").find(".giftPer").length,k;
				for(var j=0;j<i;j++){
					if($(".giftCon .giftPer").eq(j).find("dl").length == 4){
						$(".giftCon .giftPer").eq(j).find("dl").css({
							"width":"1.48rem"			
						})
					}else{
						continue ;
					}
				}
			})
		},
		copy:function(){
			 //init
		    var clipboard = new Clipboard('.btn');
		    //优雅降级:safari 版本号>=10,提示复制成功;否则提示需在文字选中后，手动选择“拷贝”进行复制
		    clipboard.on('success', function(e) {
		        alert('复制成功!')
		        e.clearSelection();
		    });
		    clipboard.on('error', function(e) {
		        alert('请选择“拷贝”进行复制!')
		    });
		}
	};
	gift.init();
})