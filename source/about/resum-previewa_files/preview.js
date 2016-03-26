
$(function(){
	//项目经验的title与icon的距离计算，防止老账号有项目经验
	var projectTitle = $('.mr_jobe_list .l2 .projectTitle');
	projectTitle.each(function(){
		var me = $(this);
		var wid = me.width();
		me.find('span').css('left', wid + 5 );
	});
	//工作年限hover效果
	$(".j").hover(function(){
		var oBirth = $(".birth_span");
		var sBirth = $.trim(oBirth.text());
		var oJ = $(".j");
		if(sBirth != "" && sBirth !="年出生"){
			oBirth.removeClass("dn");
			
			oJ.css("cursor","pointer");
		}else{
			oJ.css("cursor","default");
		}
	},function(){
		setTimeout(function(){
			var oBirth = $(".birth_span");
			oBirth.addClass("dn");
		},90);
	});	
	//自定义模块标题
	//标题的长度
	var cusWidth = parseInt($("#customBlock .cust_title").width())/2;
	$("#customBlock .cust_title").css("margin-left",-cusWidth - 10 );
	//初始化已创建在线简历页面社交网络背景图
	if($(".mr_sns") && $(".mr_sns a").length>0){
		initSnsPosition();
	}
	//初始化社交账号布局
	function initSnsPosition(){
		var sns_is = $(".mr_sns a");
		sns_is.eq(sns_is.length-1).addClass();
		
		sns_is.each(function(i){
			var sns_type = $(this).data("sns");
			var _this = $(this);
			var _span = _this.find("span");
			var _em = _span.find("em");
			switch(parseInt(sns_type)){
  				case 1: 
  					var b = document.createTextNode("Twitter");
  					_this.addClass("sns1");
  				break; 
  				
  				case 2: 
  					var b = document.createTextNode("Dribbble");
  					_this.addClass("sns2");
  				break; 
  				
  				case 3: 
  					var b = document.createTextNode("Behance");
  					_this.addClass("sns3");
  				break; 
  				
  				case 4: 
  					var b = document.createTextNode("LinkedIn");
  					_this.addClass("sns4");
  				break; 
  				
  				case 5: 
  					var b = document.createTextNode("Quora");
  					_this.addClass("sns5");
  				break; 
  				
  				case 6:
  					var b = document.createTextNode("Github");
  					_this.addClass("sns6");
  				break; 
  				
  				case 7:
  					var b = document.createTextNode("知乎");
  					_this.addClass("sns7");
  					break; 
  				case 8:
  					var b = document.createTextNode("LOFTER");
  					_this.addClass("sns8");
  					break; 
  				
  				case 9:
  					var b = document.createTextNode("UI中国");
  					_this.addClass("sns9");
  					break; 
  				
  				case 10:
  					var b = document.createTextNode("新浪微博");
  					_this.addClass("sns10");
  					break; 
  				
  				case 11:
  					var b = document.createTextNode("SegmentFault");
  					_this.addClass("sns11");
  					break; 
  				
  				case 12:
  					var b = document.createTextNode("StackoverFlow");
  					_this.addClass("sns12");
  					break; 			
			}
			_span.prepend($(b)).css("marginLeft",-(_span.width()+20)/2+"px");
		});
	}
	//列表 hover社交地址，自定义tips
	$(".mr_sns a").hover(function(){
		$(this).find("span").show();
	},function(){
		$(this).find("span").hide();
	});
	$(document).click(function(){
		$('.mr_down_tip').hide();
	});
	//下载简历弹窗
	$(".mr_down").bind("click",function(e){
		e.stopPropagation(); 
		var oTip = $(".mr_down_tip"); 
		if(oTip.is(":hidden")){
			oTip.show();
		}else{
			oTip.hide();
		}
	});
	//下载框列表绑定事件
	$(".mr_down_tip li").bind("click",function(e){
		e.stopPropagation(); 
		$(".mr_down_tip").addClass("dn");
	});
	$(".mr_down_tip li").hover(function(){
		$(".mr_down_tip li.active").removeClass("active");
		$(this).addClass("active");
	},function(){
		$(".mr_down_tip li.active").removeClass("active");
		$(this).removeClass("active");			
	});
	
	//技能评价
	$('.mr_skill_con .mr_skill_plan').each(function(){
		var percent = $(this).attr('data-skillLevel');
		var width = $(this).outerWidth();
		var pre = percent / 100 * width;
		$(this).find('em').width(pre + 10 );
	});
	
});