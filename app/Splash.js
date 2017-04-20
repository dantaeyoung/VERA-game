var Splash = {};

Splash.docReady = function() {

  $("#splashscreen").css("cursor", "pointer");

  $(".splashimage").each(function() {
 		$(this).click(function(e) {
			$(this).fadeOut(200);
		})
  })

  $(".splashimage.last").click(function() {
    $("#splashscreen").fadeOut(1000);
    Scores.displayInitialScores();
  });

};


