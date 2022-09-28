/*
three types of variables rea in javascript
var
let
const

var:
var is type of variable, same like php variable are 
working in js. use var to initialize any variable
once you intialized then no need to write var again
and again you can use only variable name to call 
variable another place.
you can also create empty variable and can assign value
on other place and override.

var is a function scope variable you can use anywhere 
in function. variable declared with var can be redeclare
var a =5;
var a = 4;

var allow hoisting, means if you call variable before 
the variable decleration then it will work 
console.log(a)
var a = 'test';


let:
let is a type of variable, let is block scope variable
uses in specific portion of code, 
function greet() {
    let a = 'hello';

    // variable b cannot be used here
    if(a == 'hello'){
        // variable b can be used here
        let b = 'world';
        console.log(a + ' ' + b);
    }

     // variable b cannot be used here
    console.log(a + ' ' + b); // error
}
// variable a cannot be used here

variable declared with let cant be redeclared, 
let a = 5;
let a = 4; give error a is already defined

let does not allow hoisting, means it cant be call before 
declaration
console.log(a);
let a = 'test';

const (constant variable)
canst can hadle only one value, you cant override value
 or redeclare const variable.

*/

var a = 'our first variable';
document.write(a);

var b;
b = 'second variable and assign value on later.'
document.write(b)