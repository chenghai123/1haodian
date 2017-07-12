//	封装函数获取ID的元素节点，获取样式
			function getId(str){
				return document.getElementById(str);
			}
			var owrap01 = getId("wrap01");
			var oslide01 = getId("slide01");
			var iWidth01 = parseInt(getStyle(owrap01,"width"));
			var oLi01st01 = getId("list01");
			var oLi01 = oLi01st01.getElementsByTagName("li");
			var oLen01 = oLi01.length;
			var onext01 = getId("next01");
			var oprev01 = getId("prev01");
			var k = 0;  //当前第几张图的索引
			var timer01 = null;
			oslide01.innerHTML+=oslide01.innerHTML;
			//自动轮播
			function autoPlay(){
				timer01 = setInterval(function(){
					k++;
					if(k>oLen01){
						oslide01.style.left = "0px";
						k=1;
					}
					if(oslide01.offsetLeft<-oslide01.offsetWidth/2){
					    oslide01.style.left="0";
					}
	//				oslide01.style.left = (-1)*k*iWidth01+"px"; css直接改，没有动画效果
	//				通过move函数改变left值，当前第几张图的数值×每个的宽度在取负值
					move(oslide01,{"left":(-1)*k*iWidth01+"px"});
					for(var i=0;i<oLen01;i++){
						oLi01[i].className = "";
					}
					oLi01[k%oLen01].className = "active";
				},3000)
			}
			//	调用自动轮播		
			autoPlay();

			// 鼠标移上移开清除或开启定时器
			owrap01.onmouseover = function(){
				clearInterval(timer01);
			}
			owrap01.onmouseout = function(){
				autoPlay();
			}	
			//下面圆点鼠标移上
			for(var i=0;i<oLen01;i++){
				oLi01[i].index = i;  //存储index属性
				oLi01[i].onmouseover = function(){
					for(var j=0;j<oLen01;j++){
						oLi01[j].className = "";
					}
					oLi01[this.index].className = "active";
					k = this.index; //将index复制给k，全局也知道当前是第几张图
					move(oslide01,{"left":(-1)*k*iWidth01+"px"});
				}
			}
			// next01的点击
			onext01.onclick = function(){
				k++;
//				if(k==oLen01){  //最后一张之后再点击改到第一张
//					k=0;
//				}
				if(k==oLen01+1){
					oslide01.style.left = "0";
					k=1;
				}
				move(oslide01,{"left":(-1)*k*iWidth01+"px"});
				
				for(var i=0;i<oLen01;i++){
					oLi01[i].className = "";
				}
				oLi01[k%oLen01].className = "active";
			}
			// prev01的点击
			oprev01.onclick = function(){
				k--;
				if(k==-1){  //第一张在往前点击改到最后一张
					k=oLen01-1;
					oslide01.style.left = (-1)*oLen01*iWidth01+"px";
				}
				move(oslide01,{"left":(-1)*k*iWidth01+"px"});
				for(var i=0;i<oLen01;i++){
					oLi01[i].className = "";
				}
				oLi01[k%oLen01].className = "active";
			}  
var odiv = getId("main03-04-left").children;
        var n = -1;
		getId("btn").onclick = function(){
			move01();	
		}
            function move01(){
		    n++;//0 1 2
			console.log(n)
			if(n>2){
				n=0;
			}
		
              if(n==0){
            	odiv[n].style.transform="translateZ(-1.8px)";
				odiv[n+1].style.transform="translateZ(5.2px)";
				odiv[n+2].style.transform="translateZ(-7.3px)";
				odiv[n].style.zIndex="3";//0 1 2
				odiv[n+1].style.zIndex="4";
				odiv[n+2].style.zIndex="2";
				odiv[n].style.top="40px";//0 1 2
				odiv[n+1].style.top="60px";
				odiv[n+2].style.top="20px";
            }
             if(n==1){
            	odiv[n+1].style.transform="translateZ(-1.8px)";
				odiv[n-1].style.transform="translateZ(5.2px)";
				odiv[n].style.transform="translateZ(-7.3px)";
				odiv[n].style.zIndex="2";//1 0 2
				odiv[n-1].style.zIndex="4";
				odiv[n+1].style.zIndex="3";
				odiv[n].style.top="20px";//0 1 2
				odiv[n-1].style.top="60px";
				odiv[n+1].style.top="40px";
            }
             if(n>=2){
            	odiv[n-1].style.transform="translateZ(-1.8px)";
				odiv[n].style.transform="translateZ(5.2px)";
				odiv[n-2].style.transform="translateZ(-7.3px)";
				odiv[n].style.zIndex="4";//1 0 2
				odiv[n-1].style.zIndex="3";
				odiv[n-2].style.zIndex="2";
				odiv[n-1].style.top="40px";//0 1 2
				odiv[n].style.top="60px";
				odiv[n-2].style.top="20px";
            }
		}
		setInterval(move01,3000);
		var k=1;
		getId("btnp01").onclick=function(){
		    k--;
			if(k<1){
			    k=3;
			}
			getId("sppp").innerHTML=k;
		}
		getId("btnp02").onclick=function(){
		    k++;
			if(k>3){
			    k=1;
			}
			getId("sppp").innerHTML=k;
		}	
		//	date对象
		setInterval(function(){
			var oDate = new Date();
	//		console.log(oDate);
	//		console.log(typeof oDate);
			getId("time").innerHTML = oDate;
		},1000)
		
		var d1 = new Date(0);   //直接写数字是按照毫秒计算
	//	console.log(d1);
		
		var d2 = new Date("2017/6/17");
	//	console.log(d2);
		
		var d3 = new Date(2017,7,04,0);  //年月日时分秒   月份从0开始计算
	//	console.log(d3);
	//	月份都从0开始算	
	//	console.log(d3.getTime());
	//	console.log(d4.getTime());
	//	
		var _left = getId("left-time");
		function calcLeftTime(){
			var d4 = new Date();
			var leftTime = parseInt((d3.getTime()-d4.getTime())/1000);
			if(leftTime>0){
	//			console.log(leftTime);
				var hours = parseInt(leftTime/3600);
				var minutes = parseInt(leftTime%3600/60);
				var seconds = leftTime%60;
				_left.innerHTML = hours+":"+minutes+":"+seconds;
			}else{
				clearInterval(t1);
				_left.innerHTML = "计时已结束";
			}
		}
		calcLeftTime();
		var t1 = setInterval(function(){
			calcLeftTime();
		},1000)
		
		var d5 = new Date();
		console.log(d5);
		d5.setTime(0);
		console.log(d5);
		
		
		
		window.onscroll=function(){
		//var show = document.getElementById("showww");
		var st = document.body.scrollTop || document.documentElement.scrollTop;
		if(st>=500){
			//show.style.display="block";
			//$("#showww").css("display","block");
			//show.style.position="fixed";
			$("#showww").css({"position":"fixed","top":"0"});
			$("#showww").slideDown("slow");
			//show.style.top="0";
		}else{
			//show.style.display="none";
			//$("#showww").css("display","none");
			$("#showww").slideUp("slow");
		}
	}