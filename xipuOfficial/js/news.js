$(function(){
	var news={		
		init:function(){
			this.bindEvent();
			this.swiper();
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
		}
	};
	news.init();
})