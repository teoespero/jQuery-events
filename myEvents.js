// 	Teo Espero
// 	BS Cloud and Systems Administration
// 	Western Governors University

// 	#Web-Dev-Bootcamp-Udemy

var letters = 0;	
var numbers = 0;
var specialChars = 0;

$("h1").click(function(){
	$(this).attr("class","text-danger");
	$(this).html("This was clicked");
});

$("button").click(function(){
	// $(this).css("background","red");
	var btnID = $(this).attr("id");
	$(this).attr("class","btn btn-danger");
	$(this).html(btnID + " was clicked");
	btnID = null;
});

$("#letra").keypress(function(key){

	var whatChar = String.fromCharCode(key.which);
	var key = key.which;

	if (/[a-z]/.test(whatChar.toLowerCase())){
		letters++;
	}
	else if (/^\d+$/.test(whatChar)){
		numbers++;
	}
	else {
		specialChars++;
	}
	
	///////////////////////////////////////////////////////////	
	// below is the straight javascript method 
	// of getting the keypress() stats
	// we're using regex because it looks cooler
	///////////////////////////////////////////////////////////

	// $("#whatKey").html(whatChar);
	// if (key >= 48 && key <= 57) {
	    
	//     // Number
	//     $("#charType").html("Number");
	//     numbers++;
	// } else if (key >= 65 && key <= 90) {
	    
	//     // Alphabet upper case
	//     $("#charType").html("Uppercase letter");
	//     letters++;
	// } else if (key >= 97 && key <= 122) {
	    
	//     // Alphabet lower case
	//     $("#charType").html("Lowercase letter");
	//     letters++;
	// }
	// else{
		
	// 	// Special Character
	//     $("#charType").html("Special character");	
	//     specialChars++;
	// }
	///////////////////////////////////////////////////////////

	// show the stats
	$("#letter").html(letters);
	$("#number").html(numbers);
	$("#special").html(specialChars);
});