// 设置引用模块的别名，paths里面的jquery-3.1.1就是下面的jquery
requirejs.config({
   paths:{
   	  jquery:'jquery-3.1.1',
   }
})
// 把这么模块引入到页面中
requirejs(['jquery','backtop'],function($,b){
      //通过new一个对象引用组件
      var B=new b.BackTop($('.toobar-top'),{
      	pos:'0'
      });
      // // 通过jq插件方式引用组件
      // $('#top').backtop({
      //   mode:'move'
      // });
});