/**
new Array()
the function is used to create the empty array. you can create empty array and
assign different values after that.
*/

var data = new Array();

// data[0] = 10;
// data[1] = 20;
// data[2] = 30;

// document.write(data);

for(var num =0; num<15;num++){
    data[num] = num + 10;
    document.write(data + "<br>");
}