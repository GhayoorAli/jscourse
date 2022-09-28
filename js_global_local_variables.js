/*
global and local varibales
global variables
the varibale that is called outside the function is called global variable.
we can use this variable anywhere in the file(we can use this inside or
outside the function)

local variables
the variables that is called inside the function is called local varibales
we cannot use this variables outside the function.
*/

var a = "Global Variable";

function variables(){
	var b = "local variables";
	document.write(a);
}

variables();

