/**
manually you can modify array element by calling their index and assign new value.
for example,
array[1] = "new value";

you can also delete element from array but it will only remove the value of that index and index remain same
for example,
delete array[1];

*/

var array = ["farrari","mazda","porsche","mcclaren"];

document.write(array + "<br>");
array[1] = "nissan gtr";

document.write(array + "<br>");

delete array[1];
document.write(array + "<br>");


