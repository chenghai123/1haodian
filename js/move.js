function getStyle(obj,attr){//获取css样式
    if(obj.currentStyle){//ie
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,null)[attr];
    }
}
function move(obj,json,fn){  	// 属性值可以不加px 透明度是用0-1之间的数值
    clearInterval(obj.timer)	// 清除正在执行的定时器

    var iSpeed  = 0;
    
    obj.timer = setInterval(function(){
        var bOver = true; //假设运动完成
        for (var attr in json){  //每个属性的遍历修改
            var iCur = 0;
            var iTarget;     //   因为我们传入的透明度参数是0-1之间，而我们的初始值是乘100的，所以目标值应该也相应的乘100
            if(attr == "opacity"){	//透明度
                iCur = parseFloat(getStyle(obj,"opacity"))*100;
                iTarget = parseInt(json[attr]*100);
            }else{
                iCur = Math.round(parseFloat(getStyle(obj,attr)));
                iTarget = parseInt(json[attr]);
            }

            iSpeed = (iTarget - iCur)/5;
				
			console.log(iSpeed);	//获取相对速度（iCur会越来越接近iTarget,速度会也来越慢）
		iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			//上下取整这样可以让速度总是相对大的,下面计算可以达到iTarget,否则iCur + iSpeed总不会等于iTarget只会无限接近它
			//-1.1向下取整是-2
            if(iCur != iTarget){
                bOver = false; //如果某一个属性没有完成运动
                if(attr == "opacity"){
                    obj.style.filter ='alpha(opacity:'+(iCur + iSpeed)+')';
                    obj.style.opacity =(iCur + iSpeed)/100;
                }else{
                    obj.style[attr] =iCur + iSpeed +"px";
					//这么运算哪怕减超了或者加超了isSpeed会修正iTarget和iCur间距再运算总会iCur==iTarget
                }

            }
        }
        if(bOver){//运动完成
            clearInterval(obj.timer);
            if(fn){
            	fn();  //如果有回调函数，执行回调函数
            }

        }

    },30)

}