$(function(){
	$("#userName").focus(function(){
		$("#tt01").animate({left:'-90px'});
		$(".abc").show(100);
	})
	$("#bb02").focus(function(){
		$("#tt02").animate({left:'-90px'});
		$(".abc01").show(100);
	})
	$("#bb03").focus(function(){
		$("#tt03").animate({left:'-90px'});
	})
	$("#userPass").focus(function(){
		$("#tt04").animate({left:'-90px'});
		$(".abc02").show(100);
	})
	$("#bb05").focus(function(){
		$("#tt05").animate({left:'-90px'});
		$(".abc03").show(100);
	})
	$("#userName").blur(function(){
		var reg = /^[a-zA-Z]{6,}$/;
		if($("#userName").val()==""){
			$("#abc").html("用户名不能为空");
			$("#bb06").attr("disabled","disabled");
			return;
		}
		if(reg.test($("#userName").val())){
			$.get("php/p3p.php",{user:$("#userName").val()},function(data){
				if(data=="1"){
					$("#abc").html("√");
					$("#bb06").removeAttr("disabled");
				}else{
					$("#abc").html("用户名已经存在");
					$("#bb06").attr("disabled","disabled");
				}
			});
		}else{
			  $("#abc").html("由任意6位以上字母组成");
			  $("#bb06").attr("disabled","disabled");
		}
	});
	$("#bb02").blur(function(){
		var reg = /^[1]\d{10}$/;
		if($("#bb02").val()==""){
			$("#abc01").html("请填写正确的手机号码");
			$("#bb06").attr("disabled","disabled");
			return;
		}
		if(reg.test($("#bb02").val())){
			$("#abc01").html("√");
		    $("#bb06").removeAttr("disabled");
		}else{
			$("#abc01").html("手机号码格式错误");
			$("#bb06").attr("disabled","disabled");
		}
	});
	$("#userPass").blur(function(){
		var reg = /^[\w]{6,12}$/;
		if($("#userPass").val()==""){
			$("#abc02").html("密码不能为空");
			return;
		}
		if(reg.test($("#userPass").val())){
			$("#abc02").html("√");
			$("#bb06").removeAttr("disabled");
		}else{
			$("#abc02").html("6-20位英文或字母组成");
		}
	});
	$("#bb05").blur(function(){
		if($("#bb05").val()==""){
			$("#abc03").html("请再次输入密码");
			return;
		}
		if($("#bb05").val()==$("#userPass").val()){
			$("#abc03").html("√");
			$("#bb06").removeAttr("disabled");
		}else{
			$("#abc03").html("两次密码输入不一致");
			$("#bb06").attr("disabled","disabled");
		}
	});
	$("#bb06").click(function(){
		$.post("php/p2p.php",{user:$("#userName").val(),userPass:$("#userPass").val()},function(data){
		    if(data==0){
		    	location.href="tiao.html";
		    }else{
		    	alert("登录失败，您的用户名错误！");
		    }
		});
	});
});
