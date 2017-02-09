// JavaScript Document
window.onload=function ()
{
	var oDiv=document.getElementById('div1');
	var oUl=document.getElementById('ul1');
	var aLi=oUl.getElementsByTagName('li');
	var i=0;
	var iNow=0;
	var aA=oDiv.getElementsByTagName('a');
	var ready=true;
	var wait=0;
	
	aA[0].onclick=function ()
	{
		tab((iNow-1+aLi.length)%aLi.length);
	};
	
	aA[1].onclick=function ()
	{
		tab((iNow+1)%aLi.length);
	};
	
	var arr=[{b: 'webkit', e: 'webkitTransitionEnd'}, {b: 'firefox', e: 'transitionend'}];
	
	function tEnd(ev){
		var obj=ev.srcElement||ev.target;
		if(obj.tagName!='LI')return;
		wait--;
		if(wait<=0)ready=true;
	}
	
	for(var i=0;i<arr.length;i++)
	{
		if(navigator.userAgent.toLowerCase().search(arr[i].b)!=-1)
		{
			document.addEventListener(arr[i].e, tEnd, false);
			break;
		}
	}
	
	function m(n){return (n+aLi.length)%aLi.length;}
	
	function tab(now)
	{
		if(!ready)return;
		ready=false;
		
		iNow=now;
		
		wait=aLi.length;
		
		for(var i=0;i<aLi.length;i++)
		{
			aLi[i].className='';
			aLi[i].onclick=null;
		}
		aLi[m(iNow-2)].className='left2';
		aLi[m(iNow-1)].className='left';
		aLi[iNow].className='cur';
		aLi[m(iNow+1)].className='right';
		aLi[m(iNow+2)].className='right2';
	}
	document.onkeydown=function (ev)
	{
		var oEvent=ev||event;
		
		switch(oEvent.keyCode)
		{
			case 37:	//←
				aA[0].onclick();
				break;
			case 39:	//→
				aA[1].onclick();
				break;
		}
	};
    
};

