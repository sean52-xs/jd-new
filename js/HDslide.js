(function($){
	$.fn.HDslide=function(settings){
		//jQuery方法extend是接收函数传进来的值的
		settings=jQuery.extend({
			"auto":true,//是否自动播放
			"autoTime":2000,//自动播放时间
			"time":200 //有焦点时图片切换时间
		},settings)
		//显示轮播图效果的方法show（）
		$.fn.HDslide.show($(this),settings);
	};
	//轮播图显示效果
	$.fn.HDslide.show=function($this,settings){
		//先获取导航区域
		var _slide_nav=$this.children('.slide-nav'),//声明导航条的变量
			t='',//声明t为获取焦点时图片切换的定时器
			t_i='';//为自动播放定时器
			//判断是否有自动播放
			if(settings.auto){
				$.fn.HDslide.autoSlide();//执行自动播放autoShow()方法
			}
			//获取焦点时和失去焦点时的效果
			$('li',_slide_nav).hover(
				//获取时
				function(){
					//声明当前li的变量
					var _this=$(this);

					//如果有自动播放，先清除自动播放
					if(settings.auto){
						clearTimeout(t_i);
					}
					//判断焦点是否是第一个
					if(_this.is('.on')==false){
						//是就隐藏掉
						t=setTimeout(function(){
							$('.rotation-list',$this).hide();//hide()是隐藏的方法
						},settings.time);
					}
				//失去时
				},function(){

				});
	}
	//声明自动播放autoShow()函数
	$.fn.HDslide.autoSlide=function(){

	}
})(jQuery)