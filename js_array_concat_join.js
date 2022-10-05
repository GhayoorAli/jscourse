/**
concat()
the function is used to combine more than one array and make a single array.
array.concat(newFirstararay,newsecondarray)

join()
the function is used to join all the array elements and make a single string.
array.join("letter here that you want to show between words like space, dash etc");
*/

var arrayOne = ["tesla","Kia","mazda","farrari"];

var arrayTwo = ["dodge","gmc"];

var arrayThree = ["audi"];

var string = array.join(" ")

var data = arrayOne.concat(arrayTwo,arrayThree);

document.write(data + "<br>");

document.write(string);

