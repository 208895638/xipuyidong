$(function(){
	var index={		
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
			$(".indexTop em").on("click",function(){
				$(".indexSideBar").fadeIn();
			});
			//sidebar点x号消失
			$(".indexSideBar em").on("click",function(){
				$(".indexSideBar").fadeOut();
			});
		},
		render:function(){
			var that=this;
			
		},
		swiper:function(){
			var swiper = new Swiper('.banner', {
		        pagination: '.swiper-pagination',
		        loop:true,
		        autoplay : 2000,
		    });
		}
	};
	index.init();
})