$(function(){
	$(".text01").focus(function(){
	    $(".form-div").css("display","block");
	});
	$(".text01").blur(function(){
	    $(".form-div").css("display","none");
	});
	$(".header-bottom-nei-right ").mouseover(function(){
		$(".neibu").css("display","block");
	});
	$(".header-bottom-nei-right ").mouseout(function(){
		$(".neibu").css("display","none");
	});
		$(".neibu").mouseover(function(){
		$(".neibu").css("display","block");
	});
    $(".neibu").mouseout(function(){
		$(".neibu").css("display","none");
	});
	$(".first01").mouseover(function(){
		$(".quanqiu").css("display","block");
	});
	$(".quanqiu").mouseover(function(){
		$(".quanqiu").css("display","block");
	});
	$(".quanqiu").mouseout(function(){
		$(".quanqiu").css("display","none");
	});
   $(".first01").hover(
  function () {
    $(".first01").css("background","white");
    $(".first01").css("color","black");
  },
  function () {
   $(".first01").css("background","#2e3c44");
    $(".first01").css("color","white");
    $(".quanqiu").css("display","none");
  }
  );
  
 $(".main01-top").find("li").hover(
     function(){
     	$(this).find(".kuang").css("display","block");
     	$(this).find(".xiakuang01").css("background","white");
     	$(this).find(".xiakuang02").css("background","white");
     	$(this).css("background","white");
     },
     function(){
     	$(this).find(".kuang").css("display","none");
     	$(".xiakuang01").css("background","#F4F4F4");
     	$(".xiakuang02").css("background","#F4F4F4");
     	$(this).css("background","#F4F4F4");
     }
 );
 
var goodsId = getCookie("goodsId"); 
//console.log(goodsId);
$.get("php/getGoodsInfo.php",{"goodsId":goodsId},function(str){
	var arr = eval('('+str+')');
	//console.log(arr);
	//$(".immg").attr("src",arr.goodsImg);
   //   $("#main01-left")[0].style.background="url("+arr.goodsImg+")"
        $("#main01-left").css("background","url("+arr.goodsImg+")");
        $("#main01-left").css("background-size","307px 478px");
		$("#main01-left").bigMirror({
		mirrorWidth:50,
		mirrorHeight:80,
		multiple:5,
		direction:"右",
		bigImgPath:arr.goodsImg	
	});

$(".main01-right").append(
'<div class="main01-right-01">'
			+'<h3>'+arr.goodsName+'</h3>'
			+'<p><span>'+arr.goodsType+'</span></p>'
			+'</div>'
			+'<div class="main01-right-02">'
				+'<div class="main01-right-02-top">'
				    +'<ul>'
				    	+'<li><span class="jiaqian">价格</span></li>'
				    	+'<li><span class="dengyu">￥'+arr.goodsPrice+'</span></li>'
				    +'</ul>'
				+'</div>'
				+'<div class="main01-right-02-bottom">'
					+'<p><span class="zhichi">支持</span><span class="mianyun">免运费</span></p>'
				+'</div>'
			+'</div>'
			+'<div class="main01-right-03">'
				+'<dl class="main01-right-03-dl01">'
					+'<dt><span>尺码</span></dt>'
					+'<dd>'
						+'<ul>'
							+'<li><span>'+arr.beiyong1+'</span></li>'
						+'</ul>'
					+'</dd>'
				+'</dl>'
				+'<dl class="main01-right-03-dl02">'
					+'<dt><span>颜色</span></dt>'
					+'<dd>'
						+'<ul>'
							+'<li><img src="img/yanse01.jpg"/><span>'+arr.beiyong2+'</span></li>'
							+'<li><img src="img/yanse02.jpg"/><span>'+arr.beiyong3+'</span></li>'
						+'<li class="main01-right-03-dl02-last01"><img src="img/yanse03.jpg"/><span>'+arr.beiyong4+'</span></li>'
						+'</ul>'
					+'</dd>'
				+'</dl>'
			+'</div>'
			+'<div class="main01-right-04">'
				+'<dl>'
					+'<dt><span>送货至</span></dt>'
					+'<dd>'
						+'<div class="diqu"><p>北京朝阳区</p></div>'
						+'<p>由<span>joyflower</span>配送并提供售后服务</p>'
					+'</dd>'
			+'</dl>'
			+'<p class="ben">本商品由1号店入驻商家提供</p>'
			+'</div>'
			+'<div class="main01-right-05">'
				+'<div class="main01-right-05-left">'
					+'<div class="main01-right-05-left-text">'
						+'<input type="text" value="1" class="text0001"/>'
					+'</div>'
					+'<div class="main01-right-05-left-btn">'
					+'<div class="main01-right-05-left-btn01">'
						+'<input id="btn1" type="button" class="btn01"/>'
					+'</div>'
					+'<div class="main01-right-05-left-btn02">'
					+'<input type="button" class="btn02"/>'
					+'</div>'
					+'</div>'
				+'</div>'
				+'<div class="main01-right-05-right">'
					+'<p class="gouwuche"><span><img src="img/gouwuche.jpg"/></span><span>加入购物车</span></p>'
				+'</div>'
			+'</div>'
);

});
 
 var user = getCookie("user");
  if(user!=""){
  	 $(".denglu").html("欢迎"+user+"先生！");
  	 
  }

var i=1;
$(".btn01").live("click",function() {
    i++;
  	$(".text0001").val(i);
 }); 
 $(".btn02").live("click",function() {
 	 i--;
 	if(i<=1){
 		i=1;
 	}
  	$(".text0001").val(i);
 }); 
 
 $(".gouwuche").live("click",function(){
 	$(".qukankan").css({"position":"absolute"});
 	$(".qukankan").animate({top:"0px"},"slow");
 	$.get("php/addShoppingCart.php",{"vipName":user,"goodsId":goodsId,"goodsCount":$(".text0001").val()},
 	     function(str){
 	     	//saveCookie("vipName",user,5);
 	     	console.log(str);
 	     }
 	);
 });
 
 $(".qukankan01").click(function(){
 	location.href="gouwuche.html";
 });
    
});
