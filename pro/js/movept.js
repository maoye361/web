  function getstyle(obj,name){
    if(obj.currentStyle){
      return obj.currentStyle[name];
    }else{
      return getComputedStyle(obj,false)[name];
    }
  }
 function startMove(obj,json,fnEnd){//运动框架，参数为，对象，对象的属性名，对象的属性名的值要到达的终点
      clearInterval(obj.timer);//清空定时器
      obj.timer=setInterval(function(){//开启定时器
        var bstop=true;//假设传入的对象的所有属性值都到了目标值，为true
        for(var attr in json){
           var speed=null;//设置定时器的速度
          var cur=null;//设置存放对象属性名现有的值
          if(attr=='opacity'){//如果属性名为透明度
            cur=(parseFloat(getstyle(obj,attr)))*100;//把属性名现有的值从CSS样式表中提取出来赋给变量             
          }else{//如果为其它如宽度，高度这类带有‘px’的
             cur=parseInt(getstyle(obj,attr));            
          }
          speed=(json[attr]-cur)/6;//速度等于对象属性名的终点值减去对象属性名的现有值
          speed=speed>0?Math.ceil(speed):Math.floor(speed);//给速度的值向上向下取整,不然数度有可能带小数点，而浏览器默认最小单位为1像素，这时元素就会抖动
           if(cur!=json[attr]){bstop=false;}//判断一下对象的属性名的现在值是否到了目标值，如果不到赋予false,继续定时器的函数，知道所有值到了目标值          
           if(attr=='opacity'){//如果属性名为透明度
            obj.style.filter='alpha(opacity:'+(cur+speed)+')';//ie下的透明度设置方法，对象的透明度等于对象的现有透明度值加上缓冲运动的速度，一直运动，直到对象透明度的值等于目标值
            obj.style.opacity=(cur+speed)/100;//这是FF和chrome的设置方法
            }else{
              obj.style[attr]=cur+speed+'px';//对于有'px'属性名的对象来说，执行这个语句，对象的属性名的运动改变值等于每次属性名的现有值加上速度，直到目标值
              }                             
        }
        if(bstop){//判断如果上面的函数判断后所有值到了目标值，执行下面这一段关闭定时器的函数，如果没到为flase，跳过这一段函数，继续执行定时器的内容
          clearInterval(obj.timer);//关闭定时器
          if(fnEnd){fnEnd()};//如果传入的参数带有后续呀执行的函数，那么定时器关闭后执行函数
        } 
      },30)

 }