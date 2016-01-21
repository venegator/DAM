$(document).ready(function () {
	$( "#clickme" ).click(function() {
		  $( "#ingresos" ).slideUp( "slow", function() {
		    // Animation complete.
		  });
	});
});

