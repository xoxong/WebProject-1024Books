
$(document).ready(function(){

	//判断调回顶部
	 window.onscroll = function()
    {
    	//document.documentElement.scrollTop 获取滚动条位置
        var s = document.body.scrollTop || document.documentElement.scrollTop
        if(s>100) {
			$(".fixed_fanhui").show();
        } else {
			$(".fixed_fanhui").hide()
        }
    }
    //返回上一页
	$(".bottom_box a:last-of-type").click(function(){
		//返回上一页
		history.go(-1);
	});
});

//返回顶部
function fixed_fanhui(){
	$('body').animate( {scrollTop: 0}, 500); 
}
