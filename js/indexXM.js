 
 $(document).ready(function(){
 	
 	/*框架调用 myfocus*/
	myFocus.set({
   		 id:'boxID',//焦点图盒子ID
  	 	 pattern:'mF_luluJQ',//风格应用的名称
   		 time:3,//切换时间间隔(秒)
   		 trigger:'mouseover',//触发切换模式:'click'(点击)/'mouseover'(悬停)
   		 width:710,//设置图片区域宽度(像素)
  		 height:355,//设置图片区域高度(像素)
   		 txtHeight:'60'//文字层高度设置(像素),'default'为默认高度，0为隐藏
	});
	  
        $("#Pagination").pagination("30");
	  
	
 });
 
 
 