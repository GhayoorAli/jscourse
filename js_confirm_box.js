/*
confirm()
is used to ask some questions, this is also a popup which has two
button ok and cancel. OK means true and Cancel means false.
we can use this events or something according to your requirement.
mostly it works with conditions. 
*/

var msg = confirm('Do you want to continue!');

if(msg == true){
	document.write("Thanks for your approval");
}else{
	alert('Are you sure to leave this page');
}
