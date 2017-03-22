var navTrigger = function(){
	$(".nav-main__trigger, .nav-main").on('click', function(){
		if ($(".nav-main").hasClass("is-hidden")){
			$(".nav-main").removeClass("is-hidden").addClass("is-visible");
			$(".nav-main__trigger-icon").removeClass("icon-menu").addClass("icon-cancel-1");
			$(".main.wrapper").addClass("is-locked");
		} else if ($(".nav-main").hasClass("is-visible")) {
			$(".nav-main").removeClass("is-visible").addClass("is-hidden");
			$(".nav-main__trigger-icon").removeClass("icon-cancel-1").addClass("icon-menu");
			$(".main.wrapper").removeClass("is-locked");
		}
	})
	navTriggerVisibility();
};
var navTriggerVisibility = function() {
	if ($(window).width() > 600) {
		$(".nav-main__trigger").removeClass("is-visible").addClass("is-hidden");
		if ( $(".nav-main").hasClass("is-hidden")) {
			$(".nav-main").removeClass("is-hidden");
			$(".main.wrapper").removeClass("is-locked");
		} else if ($(".nav-main").hasClass("is-visible")) {
			$(".nav-main").removeClass("is-visible");
			$(".main.wrapper").removeClass("is-locked");
		}
		$(".nav-main__trigger-icon").removeClass("icon-cancel-1").addClass("icon-menu");
	} else if ($(window).width() <= 600) {
		$(".nav-main__trigger").removeClass("is-hidden").addClass("is-visible");
		if ( $(".nav-main").hasClass("is-visible")) {
			$(".nav-main").removeClass("is-visible").addClass("is-hidden");
			$(".nav-main__trigger-icon").removeClass("icon-cancel-1").addClass("icon-menu");
		} else {
			$(".nav-main").addClass("is-hidden");
		}
	};
};
$(document).ready(function(){
	navTrigger();
	videoSize();
	videoResize();
});
$(window).resize(function(){
	
	videoResize();
	navTrigger();
});

// By Chris Coyier & tweaked by Mathias Bynens
var $allVideos = $("iframe[src^='https://www.youtube.com']"),

	    // The element that is fluid width
	    $fluidEl = $(".wrapper");

	// Figure out and save aspect ratio for each video
	var videoSize = function() {
		$allVideos.each(function() {

			$(this)
				.data('aspectRatio', this.height / this.width)
				
				// and remove the hard coded width/height
				.removeAttr('height')
				.removeAttr('width');

		});
	}
	var videoResize = function() {
		var newWidth = $fluidEl.width();
		
		// Resize all videos according to their own aspect ratio
		$allVideos.each(function() {

			var $el = $(this);
			$el
				.width(newWidth)
				.height(newWidth * $el.data('aspectRatio'));

		});
	};