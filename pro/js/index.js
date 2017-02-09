$(function(){
  $('#logo').on('click',function(){location.href='index.html'}); 
     $('#navbar li').each(function(){
      $(this).on('mouseover',function(){
        var index=$(this).index();
        startMove($('#navbar .nav-box')[0],60*index);
        $(this).on('click',function(){
            var Name=['index','product','resume'];
            location.href=Name[$(this).index()]+'.html';
        });
      });
     });
});
function startMove(obj, iTarget)
{
  var iSpeed = 0;
  var left = 0;
 clearInterval(obj.timer);
 obj.timer = setInterval(function(){
 iSpeed += (iTarget - obj.offsetLeft)/5;
 iSpeed *= 0.7;
 left += iSpeed;
 // 当ispeed<1并且(left-itarget)<1，代表着此时的元素距离目标值的距离小于一个像素
 if(Math.abs(iSpeed)<1 && Math.abs(left-iTarget)<1){
  clearInterval(obj.timer);
  obj.style.left = iTarget + 'px';
 }else{
  obj.style.left = obj.offsetLeft + iSpeed + 'px';
 }
 }, 30);
}
