//固定导航
window.onload=function(){
    var oDiv = document.getElementById("fixed_nav");
    var oDiv2 = document.getElementById("fixed_nav2");
    var upward=document.getElementById("upward");
    H = 564,
 
    window.onscroll = function()
    {
    	//document.documentElement.scrollTop 获取滚动条位置
        var s = document.body.scrollTop || document.documentElement.scrollTop
        if(s>H) {
			/*调用css样式动画下滑*/
			$("#fixed_nav").addClass("fixed-nav-box-show");
            upward.style="display: block;"
        } else {
            $("#fixed_nav").removeClass("fixed-nav-box-show");
            upward.style=""  
        }
        //文章页面导航
        if(s>75){
            $("#fixed_nav2").removeClass("fixed-nav-box");
        }else{
			$("#fixed_nav2").addClass("fixed-nav-box");   	
        }
        
    }
   
    
    //返回顶部动画样式
    $(".upward ul li").hover(function(){
		$(this).stop().animate({"right":"0px"},500);
	},function(){
		$(this).stop().animate({"right":"-50px","color":"black"},500);
		
	});
	
//	搜索框内容显示 获得焦点的时候
//	头部搜索
	$(".search-input").focus(function (){
		$(".search-input-main").show();
	});
	
	//顶部搜索
	$(".fixed-nav-input").focus(function (){
		$(".search-input-main2").show();
	});
	
	//底部搜索
	$(".bottom-nav-input").focus(function (){
		$(".search-input-main3").show();
	});
	
	//失去焦点的时候
	$(".search-input").blur(function (){
		$(".search-input-main").hide();
	});
	$(".fixed-nav-input").blur(function (){
		$(".search-input-main2").hide();
	});
	$(".bottom-nav-input").blur(function (){
		$(".search-input-main3").hide();
	});

}
//关闭广告
function closeAdv(){
	$(".top-advertisementXM").animate({height:"0px"},1000);
	$(".top-advertisementXM").fadeOut(1000);
}
//调回顶部
function upward(){
	// 在500毫秒内平滑滚动到页面顶部
	$('body').animate( {scrollTop: 0}, 1500); 
}


//设置首页
function sethome(){
	var url="http://www.1024books.com";
	try{
    this.style.behavior='url(#default#homepage)';
    this.setHomePage(url);
  }catch(e){
    if(window.netscape){
     try{
       netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
     }catch(e){
       alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
     }
    }else{
    alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
    }
 }

}

//收藏本站
function addhome(){
	try{
			window.external.AddFavorite("http://www.1024books.com","1024小书柜");
		}catch(e){
			try{
				window.sidebar.addPanel("1024小书柜","http://www.1024books.com","");
			}catch (e){
				alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
			}

		}
		return false;
}

