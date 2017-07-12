define(function(){
	function removeCookie(key){
	saveCookie(key,"",-1);
   }
	return{
		removeCookie:removeCookie
	}
});
