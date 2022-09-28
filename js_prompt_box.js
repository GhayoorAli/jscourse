/*
prompt()
it also a popup and if you want to get some data from user then use
prompt box. you can use this according to your requirement and 
process value that you got from prompt box.
*/

var a = prompt('Enter Your Marks');

if(a >=80 && a<=100){
	document.write("Excellent Marks");
}else if(a>=60 && a<=80){
	document.write("Good Marks");
}else if(a>=40 && a<=60){
	document.write("just passed");
}else{
	document.write("you are fail");
}