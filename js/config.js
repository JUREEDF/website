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



