//顶部广告下拉大图
$(function(){
  $('#top-adv').animate({'margin-top':'0px'},3000,function(){
    $('#top-adv').delay(3000).animate({'margin-top':'-202px'},2000);
  });
})
//shortcut 第一种方法
$('#shortcut li').hover(
	function(){
		if($(this).children('dl').length){
			$(this).addClass('li-activate');
		}
	},
	function(){
		if($(this).children('dl').length){
			$(this).removeClass('li-activate');
		}
	}
);
//第二种方法其他标签会动
// $("#shortcut li").hover(
//   function () {
//     $(this).addClass("li-activate");
//   },
//   function () {
//     $(this).removeClass("li-activate");
//   }
// );

//input 搜索框
$('#search-ip').focus(function(){
  $(this).val('');
});
$('#search-ip').blur(function(){
  if($(this).val()==''){
  	$(this).val($(this).attr('default'))
  }
});

//personal-cart 我的京东
$("#personal-cart dl").hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);
//shopping-cart 购物车
$("#shopping-cart dl").hover(
  function () {
    $(this).addClass("sp-hover");
  },
  function () {
    $(this).removeClass("sp-hover");
  }
);

//nav-list 首页标题栏
// $("#nav-list li").hover(
//   function () {
//     $(this).addClass("nav-activate");
//   },
//   function () {
//     $(this).removeClass("nav-activate");
//   }
// );

// cart-left 商品分类
$("#cart-left li").hover(
  function () {
    $(this).addClass("item-hover");
    $(this).children('.item-list').show();
    var _this_top=$(this).position().top,
    _child_height=$(this).children('.item-list').height();
    if(_this_top > _child_height){
    	$(this).children('.item-list').css('top',(_this_top+45-_child_height));
    }
  },
  function () {
    $(this).removeClass("item-hover");
    $(this).children('.item-list').hide();
  });

$('.item-list .item-list-close').click(function(){
  $(this).parent().hide();

    return false;
//第二种方法   
// var tath = $(this),
    //    pars = tath.parents(".item");
    // pars.find('.item-list').hide();
});

//header-content 轮播图
// $('.rotation').HDslide({"auto":false});

$(".rotation").slide({mainCell:".rotation-con ul",effect:"fold",autoPlay:true});

//input 手机号码搜索框
$('.md-content-ip').focus(function(){
  $(this).val('');
});
$('.md-content-ip').blur(function(){
  if($(this).val()==''){
    $(this).val($(this).attr('default'))
  }
});

//table 选项卡
$("#md-tabs").slide({mainCell:".md-content"});

//ads-tabs 疯狂抢购
$("#ads-tabs").slide({mainCell:".ads-content"});

//module-mo-content 倒计时
//剩余<span>01</span>时<span>10</span>分<span>51</span>秒
var date="";
function diffTime(etime){
  var time_sp=etime.split(' '),
      time_date=time_sp[0].split('-'),
      times=time_sp[1].split(':'),
      nowtime=new Date,
      endtime=new Date,
      arr=[];//[天，时，分，秒]
      endtime.setFullYear(time_date[0]);//获取结束的年份
      endtime.setMonth(time_date[1]-1);//获取结束的月份
      endtime.setDate(time_date[2]);//获取结束的日期
      endtime.setHours(times[0]);//获取结束的小时
      endtime.setMinutes(times[1]);//获取结束的分钟
      endtime.setSeconds(times[2]);//获取结束的秒
      var difftime=(endtime.getTime()-nowtime.getTime())/1000;
      var days=parseInt(difftime/(24*60*60));
      if(days<0){
        days=0;
      }

      arr.push(days);
      difftime%=(24*60*60);
      var hours=parseInt(difftime/(60*60));
      if(hours<0){
        hours=0;
      }
      arr.push(hours);
      difftime%=(60*60);
      var mins=parseInt(difftime/(60));
      if(mins<0){
        mins=0;
      }
      arr.push(mins);
      difftime%=60;
      if(difftime<0){
        difftime=0;
      }
      arr.push(difftime);
      return arr;
}

setInterval(function(){
  $('#xs-qiang .mo-data').each(function(){
    var _endtime=$(this).attr('endtime');
    if(_endtime != undefined){
      time=diffTime(_endtime);
      //剩余<span>01</span>时<span>10</span>分<span>51</span>秒
      var day_str="";
      if(time[0]>0){
        day_str="<span>"+time[0]+"</span>天";
      }
      str="剩余"+day_str+"<span>"+time[1]+"</span>时<span>"+time[2]+"</span>分<span>"+time[3]+"</span>秒";
      if((time[0]+time[1]+time[2]+time[3])==0){
        str="<span>已结束</span>";
      }
      $(this).html(str);
    }
  });
},1000);

//computer-details 电脑的选项卡
$(".computer-details").slide({mainCell:".details-content"});

//选项卡里的第一个
$('.dl-con:not(.hover) .dl-img').hover(function(){
  $(this).css("opacity",'0.7');
},function(){
  $(this).css("opacity",'1');
});

//table 选项卡里的小轮播图
$(".details-rot").slide({mainCell:".slide-db ul",effect:"left",autoPlay:true});

//appliance-details 家电通讯的选项卡
$(".appliance-details").slide({mainCell:".details-content"});

//life-details 生活专区的选项卡
$(".life-details").slide({mainCell:".details-content"});

//food-details 食品母婴的选项卡
$(".food-details").slide({mainCell:".details-content"});

//books-details 图书音像的选项卡
$(".books-details").slide({mainCell:".details-content"});

//input 订阅促销信息搜索框
$('.input-field').focus(function(){
  $(this).val('');
});
$('.input-field').blur(function(){
  if($(this).val()==''){
    $(this).val($(this).attr('default'))
  }
});

//books-ads-info table 图书榜选项卡
$(".books-ads-info").slide({mainCell:".info-content"});

//倒计时
// $('.mo-data').downCount({
//         date: '12/27/2015 00:00:00',
//         offset: +10
//     }, function (){
//     alert('倒计时结束!');
// });

// hot-info-1 热门晒单
$(".hot-info-1").slide({titCell:".module-mo-title ul",mainCell:".ads-info ul",autoPage:true,effect:"topLoop",autoPlay:true,vis:2});

// hot-info-2 热门活动
$(".hot-info-2").slide({titCell:".module-mo-title ul",mainCell:".ads-info ul",autoPage:true,effect:"topLoop",autoPlay:true,vis:2});








