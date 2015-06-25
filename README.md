# LoopD
Quick and easy responsive slide carousel

Include the css and these jquery files:
```
<link rel="stylesheet" type="text/css" href="/loopd.css"/>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="http://code.jquery.com/ui/1.11.3/jquery-ui.min.js"></script>
<script src="loopd.js"></script>
```
Then initialize your main container:

```
$(function(){
/* INITIALIZE WITH DEFAULTS
	Start			= 0 (Initial load frame, keep in mind 0th element is first)
	Button Theme	= dark (dark or light)
	Duration		= 5000 (time in milliseconds)
	Transition		= fade (fade or slide) when using slide add:
		Direction	= "up", "down", "left", or "right". Default is "left".
	Speed			= 500 (transition speed in milliseconds)
*/
	$("#frame1").loopd();
	
//INITIALIZE WITH OPTIONS
	$("#frame2").loopd({
		start: 1,
		theme: 'light',
		duration: 3000,
		transition: 'slide',
		direction: 'up',
		speed: 1000
	});
});
```

Add the HTML:
```
<div id="main">
	<div id="frame1" class="module light">
		<div class="loopd-frame">
		TEST FRAME 1<br>
		TEST FRAME 1<br>
		TEST FRAME 1
		</div>
		<div class="loopd-frame">
		TEST FRAME 2<br>
		TEST FRAME 2<br>
		TEST FRAME 2
		</div>
		<div class="loopd-frame">
		TEST FRAME 3<br>
		TEST FRAME 3<br>
		TEST FRAME 3
		</div>
	</div>
	<div id="frame2" class="module dark">
		<div class="loopd-frame">
		TEST FRAME 1<br>
		TEST FRAME 1<br>
		TEST FRAME 1
		</div>
		<div class="loopd-frame">
		TEST FRAME 2<br>
		TEST FRAME 2<br>
		TEST FRAME 2
		</div>
		<div class="loopd-frame">
		TEST FRAME 3<br>
		TEST FRAME 3<br>
		TEST FRAME 3
		</div>
	</div>
</div>
```
