
$(document).ready(function(){
	var length=$('.information-slider-panel').length,
		currentindex=0,
		intervarl,
		hastStartes=false,//是否开通轮播
		t=2000;//轮播时间间隔
		
		//隐藏第一张之外的图片
		$('.information-slider-panel:not(:first)').hide();
		//激活第一张图片同时激活四个按钮
		$('information-slider-item:first').addClass('slider-item-selected');
		//隐藏两个按钮
		$('.information-slider-page').hide();
		
		//鼠标悬浮显示按钮，离开隐藏同时开始滑动
		$('.information-slider-panel,.information-slider-pre,.information-slider-next').hover(function(){
			stop();
			$('.information-slider-page').show();
		},function(){
			$('.information-slider-page').hide();
			start();
		});
			
		$('.information-slider-item').hover(function(e){
			stop();
			var preIndex=$(".information-slider-item").filter(".slider-item-selected").index();
			currentindex=$(this).index();
			play(preIndex,currentindex);
		},function(){
			start();
		});
		
		//两个按钮修改图片d
		$('.information-slider-pre').unbind('click');//unbind() 方法移除被选元素的事件处理程序。
		$('.information-slider-pre').bind('click',function(){
			pre();
		});
		$('.information-slider-next').unbind('click');//unbind() 方法移除被选元素的事件处理程序。
		$('.information-slider-next').bind('click',function(){
			next();
		});
		
		
		//向前翻页
		function pre(){
			var preindex=currentindex;
			currentindex=(--currentindex+length)%length;
			play(preindex,currentindex);

		}
		//向后翻页
		function next(){
			var preindex= currentindex;
			currentindex= ++currentindex%length;
			play(preindex,currentindex);
		}
		/**从preIndex翻到currentIndex页
		preIndex 整数,翻页的起始页
		preIndex 整数，翻到的那页
		* **/
		function play(preindex,currentindex){
			$('.information-slider-panel').eq(preindex).fadeOut(500)
				.parent().children().eq(currentindex).fadeIn(1000);
			$('.information-slider-item').removeClass('slider-item-selected');
			$('.information-slider-item span').hide();
			$('.information-slider-item').eq(currentindex).addClass('slider-item-selected');
			$('.information-slider-item span').eq(currentindex).show();
			
		}
		/*开始轮播*/
		function start(){
			if(!hastStartes){
				hastStartes=true;
				intervarl=setInterval(next,t);
			}
		}
		/*停止轮播*/
		function stop(){
			clearInterval(intervarl);
			hastStartes=false;
		}
		//开始轮播
		start();
		
});
