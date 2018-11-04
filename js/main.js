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


	
	