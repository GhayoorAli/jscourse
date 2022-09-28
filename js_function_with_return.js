/*
use return if you want to use output of function again and again. 
*/
function sum(a,b,c){
	return a +b+c;
}

function percentage(total){
	var per = total/300 * 100;
	document.write(per);
}

var total = sum(120,67,87);
percentage(total);