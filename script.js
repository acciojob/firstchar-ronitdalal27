function firstChar(str) {
  // your code here
	if(str===" "){
		return "";
	}else{
		var str1 = str.trim();
		return str1.charAt(0);
	}
	
	
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
