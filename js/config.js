/**
 * Created by Administrator on 2016/11/12.
 */
//hr---------------
    $('.s_top hr,.p_s_top hr,.t_s_top hr,.c_s_top hr').animate({width:'80%'},1000)

//        图片爆炸
boom_pic('.box',15,15);

setTimeout(function(){
    $('.box div').addClass('act');
},300);


$('.box').mousemove(function(e){
    var e = e || event;
    var x = e.clientX - $(this).offset().left; //x值
    var y = e.clientY - $(this).offset().top;  //y值
    $('.box div').each(function(i){
        var x_val =Math.pow( ( x - $(this).position().left ),2);//x的差值
        var y_val =Math.pow( ( y - $(this).position().top ),2);//y的差值
        var distance = Math.sqrt( x_val + y_val ); //距离
        if( distance < 120 ){
            $(this).removeClass('act');
        }else{
            $(this).addClass('act');
        }
    });
});

$('.box').mouseleave(function(){
    $('.box div').addClass('act');
});

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



