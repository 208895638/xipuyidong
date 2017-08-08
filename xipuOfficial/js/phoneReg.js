$(function(){
	var register={		
		init:function(){
			this.bindEvent();
			this.swiper();
//			this.validate();
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
			//输入的账户判断
			$("#username").bind("input propertychange",function(){
				that.checkerName($("#username").val());
			});
			$("#username").on("blur",function(){
				that.checkerName($("#username").val());
			})
			//输入的密码判断
			$("#password").bind("input propertychange",function(){
				that.checkerPass($("#password").val());
			});
			$("#password").on("blur",function(){
				that.checkerPass($("#password").val());
			});
			//确认密码
			$("#confirm_password").bind("input propertychange",function(){
				that.confirmPass($("#password").val(),$("#confirm_password").val());
			});
			$("#confirm_password").on("blur",function(){
				that.confirmPass($("#password").val(),$("#confirm_password").val());
			});
			//点击获取验证码
			$(".conCode i").on("click",function(){
//				that.yzm($(".confirm_code").val(),yzm);
				$(this).addClass("sHide").siblings().removeClass("sHide");
				var code=60;
				var timer=setInterval(function(){					
					code--;
					$(".conCode strong").html(code+"s");
					if(code<=0){
						code=60;
						clearInterval(timer);
						$(".conCode i").removeClass("sHide").siblings().addClass("sHide");
						$(".conCode strong").html(code+"s");
					}
				},1000)
			})
			
			//点解接受协议并注册
			$(".logins").on("click",function(){
				var user=that.checkerName($("#username").val());
				var pass=that.checkerPass($("#password").val());
				var confirm=that.confirmPass($("#password").val(),$("#confirm_password").val());
				if(user&&pass&&confirm){
					
				}
			});
			//点击用户名注册
			$(".phone").on("click",function(){
				window.location.href="";
			});
		},
		render:function(){
			var that=this;
			
		},
		checkerName:function(name){
			var patten =/^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;//手机号码
//			console.log(name.length,typeof(name),name)
			if( name.trim().length == 0){
				$(".zh").html("账户不能为空且不能包含空格！");
				return false;
			}else if(!patten.test(name)){				
				$(".zh").html("手机格式不正确");
				return false;				
			}else{
				$(".zh").html("");
				return true;
			}				
		},
		checkerPass:function(pass){
			var patten =/^(\w){6,20}$/;//6到20个字母数字下划线
			if( pass.trim().length == 0){
				$(".mm").html("密码不能为空！");
				return false;
			}else if(!patten.test(pass)){				
				$(".mm").html("密码由6-18个字母、数字或下划线组成");
				return false;				
			}else{
				$(".mm").html("");
				return true;
			}		
		},
		confirmPass:function(pass,confirmPass){
			if(confirmPass.length==0){
				$(".confirmmm").html("重复密码不能为空");
				return false;	
			}else if(pass.trim() !=confirmPass.trim()){
				$(".confirmmm").html("两次输入的密码不一致");
				return false;	
			}else if(pass.trim() ==confirmPass.trim()){
				$(".confirmmm").html("密码一致");
				return true;
			}
		},
		yzm:function(val,yzm){
			if(val.trim().length==0||val.trim().length<4||val.trim().length>4){
				$(".yzm").html("验证码位数不正确");
				return false;
			}else if(val.trim().toLowerCase()!=yzm.trim()){
				$(".yzm").html("输入的验证码不正确");
			}else{
				$(".yzm").html("");
			}
		},
		swiper:function(){
			var swiper = new Swiper('.bans', {
		        pagination: '.swiper-pagination',
		        loop:true,
		        autoplay : 2000,
		    });
		},
		validate:function(){
			$().ready(function() {
			// 在键盘按下并释放及提交后验证提交表单
			  $("#signupForm").validate({
				    rules: {				      
				      username: {
				        required: true,
				        minlength: 3
				      },
				      password: {
				        required: true,
				        minlength: 6
				      },
				      confirm_password: {
				        required: true,
				        minlength: 6,
				        equalTo: "#password"
				      },				      
				      "topic[]": {
				        required: "#newsletter:checked",
				        minlength: 2
				      }
				    
				    },
				    messages: {				      
				      username: {
				        required: "请输入用户名",
				        minlength: "用户名至少由三个字符组成"
				      },
				      password: {
				        required: "请输入密码",
				        minlength: "密码长度不能小于6个字母"
				      },
				      confirm_password: {
				        required: "请输入密码",
				        minlength: "密码长度不能小于 6个字母",
				        equalTo: "两次密码输入不一致"
				      },
				    }
				});
			});
		}
	};
	register.init();
})