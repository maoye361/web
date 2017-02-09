// 定义模块(组件)，方便require引入到主页面中
// jquery,vilidate都是加载其它的js文件,function里面的$,v是简写
define(['jquery','validate'],function($,v){
	// 这个组件是通过面向对象模式写的
	// 定义构造函数,其中的el代表外面谁引用的,opts是参数
   function BackTop(el,opts){
   	// 这语句的作用是把用户传入的参数代替这个组件默认的参数
   	// 有这语句存在，用户就算不传参数也能运行
       this.opts=$.extend({},BackTop.defaults,opts);
       // 把外面谁引用的对象设置为这个构造函数的属性，并且让这个谁成为jq对象
       this.el=$(el);
       // 由于上面引用了vilidate外部组件，所以把这个组件实例化赋值为当前构造函数的属性
       // 因为外部组件也是构造函数的实例化，所以需要传递参数
       this.v=new v.Scrollto({
            dest:0,
            speed:this.opts.speed
       });
       // 让页面一开始就运行这个方法
       this.check();
       // 如果用户不传入参数，使用默认
       if(this.opts.mode=='move'){
       	this.el.on('click',$.proxy(this.move,this));
       }else{
        this.el.on('click',$.proxy(this.go,this));
       }
       // 页面滚动，执行方法
       $(window).on('scroll',$.proxy(this.check,this));
   };
   // 设置构造函数的原型方法，这样所有的实例都可以有同样的方法，即原型==class
   BackTop.prototype.move=function(){
       this.v.move();
   };
   BackTop.prototype.go=function(){
       this.v.go();
   };
   BackTop.prototype.check=function(){
       if($(window).scrollTop()>this.opts.pos)
       {
       	this.el.show(500);
       }else{
       	this.el.hide(500);
       }
   };
   // 这个构造函数默认的参数
   BackTop.defaults={
   	  mode:'move',
   	  pos:$(window).height(),
   	  speed:800
   };
   // 这个语句的作用是把这个组件封装成JQ插件
   // 插件名字是backtop,因为jq是可以连缀的所以需要返回当前的this,this代表谁用这个插件，就是谁
   // 由于调用的对象可能是一个，也可能是多个，所以，循环一下调用的对象有多少个就给加多少个BackTop实例
   $.fn.extend({
       backtop:function(opts){
         return this.each(function(){
         	new BackTop(this,opts)
         })
       }
   });
   // 把这个组件的API返回出去，方便调用
   // 注意这个return API写在最后
   return {
   	BackTop:BackTop
   }
   
})