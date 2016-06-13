var side = prompt("Hello! Thank you for using Etch-A-Sketch. First off, how many rows do you want your sketch pad to span?", "16");

$(document).ready(function(){
	for (var i=0;i<side;i++){
		$('table').append($('<tr></tr>'));
	}
	for (var i=0;i<(7/4)*side;i++){
		$('tr').append($('<td><div class="pixels '+i+'"></div></td>'));
	}
	$(".pixels").height($(".pixels").width());

	$(".pixels").mousemove(function(e){
		if (e.which==1)
		{
			$(this).css("background-color","#53585F");
			$(this).css("opacity","1.0");
			e.preventDefault(); //for Chrome
		}
	});
});