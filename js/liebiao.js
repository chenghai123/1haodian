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
  
  $.get("php/getGoodsList.php",function(str){
	   var arr = eval("("+ str +")");
  //	alert(arr);
	   	   for(var i=0;i<arr.length;i++){  
  	   	    $(".main01-bottom").append(
  	   	    '<div class="main01-shang" goodsId="'+arr[i].goodsId+'">'
				+'<p class="showtu"><img src="'+arr[i].goodsImg+'"/></p>'
				+'<div class="hua">'
					+'<input type="button" value="<"/>'
					+'<div class="dong">'
					+'<p><img src="'+arr[i].beiyong6+'"/></p>'
					+'<p><img src="'+arr[i].beiyong7+'"/></p>'
					+'<p><img src="'+arr[i].beiyong8+'"/></p>'
					+'<p><img src="'+arr[i].beiyong9+'"/></p>'
					+'<p><img src="'+arr[i].beiyong10+'"/></p>'
					+'<p><img src="'+arr[i].beiyong7+'"/></p>'
				   +'</div>'
					+'<input type="button" value=">"/>'
				+'</div>'
				+'<div class="word">'
					+'<p class="JoyFlower">'+arr[i].goodsId+'</p>'
					+'<p>'+arr[i].goodsName+'</p>'
					+'<p><span class="baoyou">'+arr[i].goodsType+'</span> </p>'
					+'<p><span class="jiaqian">￥'+arr[i].goodsPrice+'</span><a class="you">包邮</a></p>'
				+'</div>'
  	   	    );
   }
	   	   $(".main01-shang").click(function(){
	   	       saveCookie("goodsId",$(this).attr("goodsId"),5);
	   	       location="xiangqing.html";
	   	   });
	   	   
});
  
 var user = getCookie("user");
  if(user!=""){
  	 $(".denglu").html("欢迎"+user+"先生！");
  }
  
  
  
});
