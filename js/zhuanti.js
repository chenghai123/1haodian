$(function(){
	$(".lili").hover(
		function(){
			$(this).find(".tp01").hide();
			$(this).find(".feila").show();
			//$(this).find(h2).css("color","#c69c6d");
			//$(this).find(h2).css("color","black");
		},
		function(){
			$(this).find(".tp01").show();
			$(this).find(".feila").hide();
		}
	);
	$(".feila").hover(
	 function(){
		$(this).eq(0).css("color","#c69c6d");
	 },
	  function(){
		$(this).eq(0).css("color","black");
	 }
	);
});
