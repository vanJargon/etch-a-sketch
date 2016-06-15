var side = prompt("Hello! Thank you for using Etch-A-Sketch. First off, how many grids do you want the height of your canvas to span?", "16");

$(document).ready(function(){
	//Creating layout ----------------------------------------------------
	for (var i=0;i<side;i++){
		$('table').append($('<tr></tr>'));
	}

	for (var i=0;i<(7/4)*side;i++){
		$('tr').append($('<td><div class="default pixels '+i+'"></div></td>'));
	}

	$(".pixels").height($(".pixels").width());

	$(".grid").height($(".table").height());

	$("#slider").slider({
		max: (7/4)*side
	});

	$("#radio").buttonset();

	$("#clear").button();

	var old_clear = $("#slider").slider("value");
	//Event functions ----------------------------------------------------
	function hex_generator() {
	  var letters = "1234567890ABCDEF";
	  letters_array = letters.split('');
	  color = "#";
	  for (var i = 0; i < 6; i++) {
	    color += letters_array[Math.floor(Math.random() * (letters_array.length - 0)) + 0];
	  };
	  return color;
	};

	function default_draw(e) {
		if (e.which==1)
		{
			$(this).css("background-color","#53585F");//default "#53585F"
			$(this).css("opacity","1.0");
			e.preventDefault(); //for Chrome
		}
	};

	function colorful_draw(e) {
		if (e.which==1)
		{
			$(this).css("background-color",hex_generator);
			$(this).css("opacity","1.0");
			e.preventDefault(); //for Chrome
		}
	};

	$(".default").mousemove(default_draw);
	
	$("#slider").on("slidechange", function(){
		var new_clear = $("#slider").slider("value");
		for (var i=old_clear;i<new_clear;i++){
			$("."+i).css("background-color", "#ffffff");
		}
		old_clear = new_clear
	});

	$("#clear").on("click", function(){
		location.reload();
	});

	$("input:radio[name=radio]").click(function(){
		$(".pixels").removeClass("default");
		$(".pixels").removeClass("colorful");

		if ($("#radio1").is(":checked")){
			$(".pixels").addClass("default");
			$(".default").mousemove(default_draw);
		}
		else if ($("#radio2").is(":checked")){
			$(".pixels").addClass("colorful");
			$(".colorful").mousemove(colorful_draw);
		}
	});
});