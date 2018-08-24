//////////////////////////////////////////////////////////////////////
// 	This javascript file is used to demonstrate the use of jQuery
// 	event triggers.
// 
// 	Teo Espero
// 	BS Cloud and Systems Administration
// 	Western Governors University

// 	#Web-Dev-Bootcamp-Udemy
//////////////////////////////////////////////////////////////////////

var letters = 0;	
var numbers = 0;
var specialChars = 0;

showStats();

$("h1").click(function(){
	$(this).attr("class","text-danger");
	$(this).html("This was clicked");
});

$("#btn04").click(function(){

	
	// change the button class to DANGER
	// unless the user clicks on the RESET button
	resetEverything();
	showStats();
});


$("button:not(#btn04)").click(function(){

	
	// change the button class to DANGER
	// unless the user clicks on the RESET button
	var btnID = $(this).attr("id");
	
	$(this).attr("class","btn btn-danger");
	$(this).html(btnID + " was clicked");
	btnID = null;
});


$("#letra").keypress(function(key){

	var whatChar = String.fromCharCode(key.which);
	var key = key.which;

	$("#whatKey").html(whatChar);
	if (/[a-z]/.test(whatChar.toLowerCase())){
		letters++;
		$("#charType").html("Letter");
	}
	else if (/^\d+$/.test(whatChar)){
		numbers++;
		$("#charType").html("Number");
	}
	else {
		specialChars++;
		$("#charType").html("Special character");
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
	showStats();
});

function showStats(){
	$("#letter").html(letters);
	$("#number").html(numbers);
	$("#special").html(specialChars);
}

function resetEverything(){
	$("button:not(#btn04)").attr("class","btn btn-default");
	$("#letra").val("");
	$("#btn01").html("Button 1");
	$("#btn02").html("Button 2");
	$("#btn03").html("Button 3");
	$("h1").html("jQuery Events");
	$("h1").html("jQuery Events");
	$("h1").removeClass("text-danger");
	$("#charType").html("");
	$("#whatKey").html("");

	letters = 0;	
	numbers = 0;
	specialChars = 0;
}

//////////////////////////////////////////////////////////////////////
// 	EOF
//////////////////////////////////////////////////////////////////////