//shortcut-right 头部的特色栏目
$("#shortcut-right li").hover(
  function () {
  	if($(this).children('dl').length){	
    	$(this).addClass("li-activate");
  	}
  },
  function () {
  	if($(this).children('dl').length){
	    $(this).removeClass("li-activate");

	}
  }
);
//input框获取焦点和失去焦点的效果
//获取焦点
$('#search-ip').focus(function(){
  $(this).val('');
});
//失去焦点
$('#search-ip').blur(function(){
	if($(this).val()==""){
		$(this).val($(this).attr('default'));
	}
});
//cart-left 商品分类
$("#cart-left li").hover(
  function () {
    $(this).addClass("item-hover");
    var _this_top=$(this).position().top,
    	_child_height=$(this).children('.item-list').height();
    if(_this_top > _child_height){
    	$(this).children('.item-list').css('top',(_this_top+45-_child_height ));
    }
  },
  function () {
    $(this).removeClass("item-hover");
  }
);

