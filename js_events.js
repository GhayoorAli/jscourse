/*
Events 
events is used to call the function at specific time. many types of events
are occured like mouse event, keyboard event and windows events.
forexample, when you will click on something, page reoload, or press keyboard
up key then the function will call.
list of events
click (onclick)
double click (ondblclick)
right click (oncontextmenu)
mouse hover (onmouseenter)
mouse out (onmouseout)
mouse down (onmousedown)
mouse up (onmouseup)
key press (onkeypress)
key up (onkeyup)
load (onload)
unload (onunload)
resize (onresize)
scroll (onscroll)

keyboard and resize event will call  on body tag


<body onkeypress="firstEvent()">
<button onclick="firstEvent()"> Click To Call</button>

<p ondblclick="firstEvent()">Click me double</p>

<p oncontextmenu="firstEvent()">Click me right</p>

<p onmouseenter="firstEvent()">Hover on me</p>

<p onmouseup="firstEvent()">up on me</p>

</body>
*/

function firstEvent() {
	document.write('Yes im first event calling.');
}