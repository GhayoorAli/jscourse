/*
If else if statement:
it works like same as in php. if first condition is true 
then it will not check next statement. if first condition
is false then it will check second statement and if not
any statement is true then else statement will execute.
*/

var a = 70;

if(a >=80 && a<=100){
	document.write("Excellent Marks");
}else if(a>=60 && a<=80){
	document.write("Good Marks");
}else if(a>=40 && a<=60){
	document.write("just passed");
}else{
	document.write("you are fail");
}