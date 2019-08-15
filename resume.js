$(document).ready(function(evt) {

	//runs when h2 clicked
	$("#resume h2").click(function() {
		$(this).toggleClass("minus");
		if ($(this).attr("class") != "minus"){
			$(this).next().fadeOut(1000);
		}
		else {
			$ (this).next().slideDown(1000);
		}
		evt.preventDefault(); //cancel default action
	}); //end click
});
	//$("#resume").find("a:first").focus(); //focus on first <a> tag

