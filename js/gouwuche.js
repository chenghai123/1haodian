$(function(){
var user = getCookie("user");
  if(user!=""){
  	 $(".zhuti").html("欢迎"+user+"先生！");
  }

 $.get("php/getShoppingCart.php",{"vipName":user},function(str){
 	var arr = eval('('+str+')');
 		var k=0;
 	for(var i=0;i<arr.length;i++){
 		$(".main01-bottom-center").append(
 			'<div class="limian">'
 			+'<input type="checkbox" class="check02"/>'
 			+'<p class="ppppp">'+arr[i].goodsId+'<p>'
				+'<dl>'
				+'<dt><img src="'+arr[i].goodsImg+'"/></dt>'
					+'<dd><p>'+arr[i].goodsName+'/p></dd>'
				+'</dl>'
					+'<div class="p01"><p class="abc">'+arr[i].goodsPrice+'</p></div>'
						+'<div class="p02">'
						+'<input type="button" value="-" class="btn03"/>'
						+'<input type="text" class="text001" value="'+arr[i].goodsCount+'"/>'
						+'<input type="button" value="+" class="btn04"/>'
					   +'</div>'
					+'<div class="p03">'+(arr[i].goodsPrice*arr[i].goodsCount)+'</div>'
					+'<div class="p04"><a class="ppp">删除</a></div>	'
					+'<div>'
 		);
 		k+=arr[i].goodsPrice*arr[i].goodsCount;
// 		$(".pp01").html(k);
 	}

 	$(".limian").on("click",".ppp",function(){
 		//alert(1)
 		var goodsId = $(this).parent().parent().find(".ppppp").html();
 		console.log(goodsId)
	  $.get("php/deleteGoods.php",{"vipName":user,"goodsId":goodsId},function(str){
	 	console.log(str);
	 	location.reload();
	 	$(this).parent().parent().find(".limian").remove();
	   });
	   
	});
 	$(".main01-bottom-bottom").append(
 		'<div class="main01-bottom-bottom-left">'
					+'<input type="checkbox"  class="check03"/>'
				    +'<a>全选</a>'
				    +'<a class="a01">批量删除</a>'
				+'</div>'
				+'<div class="main01-bottom-bottom-right">'
					+'<div class="right-top">'
						+'<p class="pp00">商品总计(不含邮费)：</p>'
						+'<p class="pp01">'+k+'</p>'
					+'</div>'
					+'<div class="right-bottom">'
						+'<input type="button"  value="继续购物" class="jixu"/>'
						+'<input type="button"  value="去结算" class="jiesuan"/>'
					+'</div>'
				+'</div>'
 	);
 	
$(".jixu").click(function(){
	 location.href="liebiao.html";
  });
	//alert("1")
	$(".p02").on("click",".btn04",function(){
		var num=parseInt($(this).siblings(".text001").val());
			$(this).siblings(".text001").val(num+1);
		var abc = parseInt($(this).parent().parent().find(".abc").html());
		$(this).parent().parent().find(".p03").html((num+1)*abc);
			var goodsCount = $(this).parent().find(".text001").val();
			var goodsId = $(this).parent().parent().find(".ppppp").html();
		$.get("php/updateGoodsCount.php",{"vipName":user,"goodsId":goodsId,"goodsCount":goodsCount},function(str){
			
		})
//		var oAdd = k+;
//	 $(".pp01").html(k);
	 console.log($(".p03").length)
	 var oAdd = 0 ;
	 for(var i=0;i<$(".p03").length;i++){
	 oAdd += parseInt($(".p03")[i].innerHTML)
	 }
	 $(".pp01").html(oAdd);
	 
	})
	
	$(".p02").on("click",".btn03",function(){
		var num = parseInt($(this).siblings(".text001").val());
		
		if(num<1){
			num=1;
		}
		$(this).siblings(".text001").val(num-1);
		var abc = parseInt($(this).parent().parent().find(".abc").html());
		$(this).parent().parent().find(".p03").html((num-1)*abc);
		
		var goodsCount = $(this).parent().find(".text001").val();
		var goodsId = $(this).parent().parent().find(".ppppp").html();
		$.get("php/updateGoodsCount.php",{"vipName":user,"goodsId":goodsId,"goodsCount":goodsCount,},function(str){
			
		})
//		 $(".pp01").html(k);
		 var oAd = 0 ;
	 for(var i=0;i<$(".p03").length;i++){
	 oAd += parseInt($(".p03")[i].innerHTML)
	 }
	 $(".pp01").html(oAd);
	
	});
		
 });


});

