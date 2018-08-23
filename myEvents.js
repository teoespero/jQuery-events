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