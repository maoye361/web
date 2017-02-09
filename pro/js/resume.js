window.onload=function(){
	window.addEventListener('scroll',function(e){
        var top=document.body.scrollTop||document.documentElement.scrollTop;
        var obj=document.getElementById('nav');
        if(top>600)
        {
          obj.style.backgroundColor='#1c1c1c';
        }else{
        	obj.style.backgroundColor='';
        }
	});
	var title=document.getElementsByClassName('title')[0];
	title.addEventListener('click',function(){
		location.href='index.html';
	});
	
}