/*全部书籍距离顶部的高度*/
var hight_2;
$(document).ready(function(){
	hight_2=$(".week_re_title3").offset().top;
	window.onscroll = function()
    {
	 var s = document.body.scrollTop || document.documentElement.scrollTop
        if(s>200) {
			$(".wap_search_box").addClass("wap_search_box_select");
			
        } else {
			$(".wap_search_box").removeClass("wap_search_box_select");
        }
    }
	$(".bottom_box a:last-of-type").click(function(){
		//返回上一页
		history.go(-1);
	});
});

function top_btn1(){
	$(".wap_search_box").removeClass("wap_search_box_select");
	$("html body").animate({scrollTop:0},500);
}
function top_btn2(){
	$(".wap_search_box").addClass("wap_search_box_select");
	$("html body").animate({scrollTop:1055},1000);//1020

}
