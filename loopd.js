/*
jQuery LoopD v1.0 5/26/2015
Dependencies: jquery, jquery-ui

Copyright (c) 2015 Jubin Kim
http://www.jubinkim.com

Licensed under the MIT license.

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/

(function( $ ) {
    $.fn.loopd = function(opts) {
    	var $items = $(this).children();
		var set = $.extend({
			start: 0,
            theme: "dark",
			duration: 5000,
			transition: 'fade',
			direction: 'left',
			speed: 500
        }, opts);
		var loop,i,trans=set.transition+",500",op="",sp=set.speed;
    	init($items);
    	
    	function loopin(){
    		$($items).hide(trans,op,sp,function(){$(this).removeClass('active');}),
    		$($items[i]).show(trans,op,sp,function(){$(this).addClass('active');});
    		$("[data-loop-id]",$($items).parent()).removeClass("active");
    		$("[data-loop-id|="+i+"]",$($items).parent()).addClass("active");
    		loop=setTimeout(function(){
    			i++;
    			if(i>=$items.length){i=0;}
    			loopin($items);
    		},set.duration);
    	}
    	
	    function init($items){
			i=set.start>=$items.length?0:set.start;
			trans=set.transition=='slide'?"slide":'fade';
			op=set.transition=='slide'?{direction: set.direction}:'';
	    	$items.css('display','none');
			var b='<div id="loopd">',thm=set.theme;
			if(set.theme=='light'){thm='loopd-btn-light';}
			if(set.theme=='dark'){thm='loopd-btn-dark';}
			for(var j=0; j<$items.length; j++){
				$($items[j]).attr("id","loop"+j);
				b+="<span class='loopd-btn "+thm+"' data-loop-id='"+j+"'></span>";
			}
			b+='</div>';
			$($items).parent().append(b);
			$('.loopd-btn', $($items).parent()).each(function(){
				$(this).bind("click",function(){
					i=$(this).attr("data-loop-id");
					clearTimeout(loop);
					loopin($items);
				});
			});
		loopin($items);
		}
    };
}( jQuery ));
