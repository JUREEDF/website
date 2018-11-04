$(function(){
	to_top('.to_top');
});

//省略号
/*
 给需要显示省略号的地方加入class .dot(需要设置盒子宽高)
 */
$(".dot").each(function(){
	$(this).dotdotdot({
		ellipsis: '... '
	});
});
$(window).resize(function(){
	$(".dot").each(function(){
		$(this).dotdotdot({
			ellipsis: '... '
		});
	});
});


//随机颜色
function color(){
	var col = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
	var res = '';
	for( var i = 0; i < 6 ; i ++){
		var num = parseInt( Math.random()*15 );
		res += col[num] ;
	}
	return '#' + res;
}

//返回顶部
function to_top( obj ){
	$( obj ).click(function(){
		$('html,body').animate({
			'scrollTop' : '0'
		},500);
	});
}


//用于时间补位
function toTwo( obj ){
	if( obj < 10 ){
		obj = '0' + obj;
	}
	return obj;
}


/*
 文本长度截取,显示省略号
 obj:对象
 num_end:截取的结束位数
 */
function str_slice(obj,num_end){
	$(obj).each(function(){
		var demoHtml = $(this).html();
		if( demoHtml.length > num_end ){
			$(this).html(demoHtml.slice(0,num_end)+'...');
		};
	});
}


//页面入场动画
/*
 obj:入场动画的对象(指定统计的class)
 className:具体动画的class名字
 */
function action( obj , className){
	var sc = $(window).scrollTop();
	$(window).scroll(function(){
		sc = $(window).scrollTop();
	});

	var wh =  $(window).height();
	$(window).resize(function(){
		wh = $(window).height();
	});

	$( obj ).each(function(i){
		if( ( $(this).offset().top - sc ) < ( wh - $(this).height()/2 )  ){
			$(this).addClass( className );
		}else{
			$(this).removeClass( className );
		}
	})
}


//swip封装
/*
 info: swip数据的json
 swip_target : swip的大盒子id/class
 swip_auto : 自动播放 默认自动
 swip_pagination : swip底部分页的id/class
 swip_pagination_Type : 分页类型，默认 小圆点bullets,fraction数字分式
 swip_speed : 切换速度
 swip_prevButton : 左按钮
 swip_nextButton : 右按钮
 swip_effect : 切换效果 默认 slide ，'fade'淡入淡出
 slide_num : 一页显示li的数量
 slide_group : 多少li为一组进行移动
 slide_margin : li之间的距离
 slide_offsetLeft : li与左侧屏幕的距离
 loop : 是否循环 默认'true'
 */
function go_swip(info){
	var mySwiper = new Swiper( info.swip_target , {
		autoplay: info.swip_auto,//自动滑动
		autoplayDisableOnInteraction : false,
		pagination : info.swip_pagination ,//分页器id/class
		paginationType : info.swip_pagination_Type || 'bullets' ,//分页器类型
		paginationClickable :true,
		speed: info.swip_speed || 800,
		prevButton: info.swip_prevButton || 'null',//左边按钮id/class
		nextButton: info.swip_nextButton || 'null',//右边按钮id/class
		effect : info.swip_effect || 'slide',//切换效果
		slidesPerView : info.slide_num || 1, //一页显示li的数量
		slidesPerGroup : info.slide_group || 1,//多少li为一组进行移动
		spaceBetween : info.slide_margin || 0,//li之间的距离
		slidesOffsetBefore : info.slide_offsetLeft || 0,//li与左侧屏幕的距离
		initialSlide : 0,//初始显示的li的索引
		observer: true,//当li节点被修改的时候自动更新Swiper
		observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
		grabCursor : true,//鼠标抓手形状，触屏看不到
		loop: info.loop || 'true'  //循环
	})
}


//爆炸图片效果
/*
 obj:插入位置
 row:行个数
 col:列个数
 */
function boom_pic(obj,row,col){
	//每个小块的宽度
	var w = $(obj).width()/row;
	//每个小块的高度
	var h = $(obj).height()/col;
	for( var i = 0 ; i < row ; i ++ ){
		for( var j = 0 ; j < col ; j ++ ){
			var html = document.createElement('div');
			$(html).css({
				'width' : w + 'px',
				'height' : h + 'px',
				'opacity' : '0',
				'position' : 'absolute',
				'top' : h*i + 'px',
				'left' : w*j + 'px',
				'backgroundPosition' : -w*j + 'px ' + (-h*i) + 'px',
				'transition': 'all '+ Random(0.5,1) +'s ease-in',
				'transform' : 'translate3d('+Random(-200,200)+'px,'+Random(-200,200)+'px,'+Random(-300,300)+'px) scale( '+Random(1.5,2.5)+') rotateY('+Random(100,360)+'deg) rotateX('+Random(100,360)+'deg)'
			});
			$(obj).append(html);
		}
	}
}

//随机范围
function Random(start,end){
	return Math.random()*(end-start)+start;
}
	
	