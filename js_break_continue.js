/**
continue
this statement will skip the next vale and direct go onto loop.

break
this statement will not run the loop after the break statement.
*/


var num = 1;

for (num; num <= 10; num++){
	if(num == 4){
		continue;	
	}
		document.write(num + "*" +12+ "=" + num * 12 + "<br>" );
	
}