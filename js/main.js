var side = prompt("Thanks for using Etch-A-Sketch! First off, how many rows do you want your sketch pad to span?", "16");

function trace(){
	$(this).closest('.pixels').css("background-color","#53585F");
}

$(document).ready(function(){
	for (var i=0;i<side;i++){
		$('table').append($('<tr></tr>'));
	}
	for (var i=0;i<(7/4)*side;i++){
		$('tr').append($('<td><div class="pixels"></div></td>'));
	}
	$(".pixels").height($(".pixels").width());

	$(".grid").on("mousedown", function(){
		$(".pixels").on("mouseenter", trace);
	});
});