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
  var user = getCookie("user");
  if(user!=""){
  	 $(".denglu").html("欢迎"+user+"先生！");
  	 
  }
  
});
