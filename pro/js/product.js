$(function(){
  var oli=$('.box li');
  oli.hover(function(e){
  	move.call(this,e,true);
  },function(e){
    move.call(this,e,false);
  });
  function move(e,bool){
    var liTop=$(this).offset().top;
    var liLeft=$(this).offset().left;
    var liBottom=$(this).offset().top+$(this).height();
    var liRight=$(this).offset().left+$(this).width();

    var e=e||window.event;
    var pagex=e.pageX, pagey=e.pageY;

    var jtop=Math.abs(pagey - liTop);
    var jleft=Math.abs(pagex - liLeft);
    var jbottom=Math.abs(pagey - liBottom);
    var jright=Math.abs(pagex - liRight);
    
    var min=Math.min(jtop,jbottom,jleft,jright);
    
    switch(min){
    	case jtop:
    	if(bool){
           $(this).find('.cover').css({
           	 top:"-250px",
           	 left:0
           }).stop().animate({
           	  top:'0'
           },500);
    	}else{
            $(this).find('.cover').stop().animate({
            	top:'-250px'
            },500)
    	}
    	break;
    	case jleft:
    	if(bool){
           $(this).find('.cover').css({
           	 top:0,
           	 left:"-250px"
           }).stop().animate({
           	  left:'0'
           },500);
    	}else{
            $(this).find('.cover').stop().animate({
            	left:"-250px"
            },500)
    	}
    	break;
    	case jbottom:
    	if(bool){
           $(this).find('.cover').css({
           	 top:"250px",
           	 left:'0'
           }).stop().animate({
           	  top:'0'
           },500);
    	}else{
            $(this).find('.cover').stop().animate({
            	top:"250px"
            },500)
    	}
    	break;
    	case jright:
    	if(bool){
           $(this).find('.cover').css({
           	 top:"0",
           	 left:'250px'
           }).stop().animate({
           	  left:'0'
           },500);
    	}else{
            $(this).find('.cover').stop().animate({
            	left:'250px'
            },500)
    	}
    	break;
    }
  };
  $('#project .box li').eq(0).on('click',function(){location.href='css.html'});                    
  $('#project .box li').eq(1).on('click',function(){location.href='javascript.html'});
  $('#project .box li').eq(2).on('click',function(){location.href='css3.html'});
  $('#project .box li').eq(3).on('click',function(){location.href='moblie.html'});
  $('#project .box li').eq(4).on('click',function(){location.href='bing.html'});
  $('#project .box li').eq(5).on('click',function(){location.href='more.html'});
});