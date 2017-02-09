// 定义功能模块，jquery是引用的模块
define(['jquery'],function($){
    function Scrollto(opts){
       this.opts=$.extend({},Scrollto.defaults,opts);
       this.e=$('html,body');
    };
    Scrollto.prototype.move=function(){
    	var opts=this.opts;
    	if($(window).scrollTop() != opts.dest){
    		if(!this.e.is(':animated')){
    			this.e.animate({
		             scrollTop:opts.dest
		         },opts.speed)
    		}
    	} 
    };
    Scrollto.prototype.go=function(){
    	 var opts=this.opts.dest;
    	 if($(window).scrollTop() != opts){
         this.e.scrollTop(opts)
     }
    };
    Scrollto.defaults={
        dest:0,
        speed:800
    };
    return  {
    	Scrollto:Scrollto
    };

    // function Check(opts){
    //    this.opts=$.extend({},Check.defaults,opts);
    // };
    // Check.prototype.check=function(){
    // 	 if(this.opts.o==this.opts.val)
    //     {
    //     	$('.toobar-top').slideUp('slow');
    //     }else{
    //     	$('.toobar-top').slideDown('slow');
    //     }
    // }
    // Check.defaults={
    // 	o:document.body.scrollTop,
    // 	val:0
    // };
    // return  {
    // 	Check:Check
    // };
});