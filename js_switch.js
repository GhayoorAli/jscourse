/*
Switch statement:
switch statement is working like if else statement,
you have to enter any expression in switch statment
and then add different cases according to expression.

if you put true in switch statment then switch statement
will run and then  check conditions.
*/

var marks = 70;

switch(true){
	case (marks >=80 && marks<=100):
	document.write("Excellent Marks");
	break;
	case(marks >=60 && marks <= 80):
	document.write("Good Marks");
	break;
	case(marks >=40 && marks<=60):
	document.write("passed");
	break;
	default:
	document.write("failed");
}