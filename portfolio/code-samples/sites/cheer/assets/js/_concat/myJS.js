/*************************************
 ***  variables for all functions  ***
 *************************************/

var windowWidth = $( window ).width(),
	windowHeight = $( window ).height();

var headerBtn = $('.header [class^="btn"]'),
	gridItem = $('.thumb-grid__grid-item'),
	gridItemHeight = gridItem.height(),
	gridLength = gridItem.length,
	gridOverlay = $('.no-touch .thumb-grid__overlay'),
	slider = $('.slider'),
	sliderSlide = slider.find('.slider__slide'),
	slideHeight = sliderSlide.height(),
	slideContainer = slider.find('li'),
	sliderLength = sliderSlide.length,
	slickSlide = $('.slick-slide');


$( document ).ready (function(){

	var forceRedraw = function() {
		$("body").addClass("dummyClass").removeClass("dummyClass");
	}
	var btnFull = function() {
		windowWidth = $( window ).width();
		if ( windowWidth <= 585 ) {
			headerBtn.addClass("btn--full").attr("data-class-added", "added");
		} else if ( windowWidth >= 586 ) {
			headerBtn.removeClass("btn--full");
		}
	};

	var navBtn = function() {
		$(this).toggleClass('open');
	};

	var linkWrap = function() {
		$('.touch .thumb-grid__thumbnail').each(function(){
			$(this).wrap('<a href="#" class="thumb-grid__link"></a>');
		});
		for (i = 0; i < gridLength; i++) {
			var curItem = gridItem[i];
			var link = $(curItem).find('.thumb-grid__overlay[href]').attr('href');
			$(curItem).find('.thumb-grid__link').attr('href', link);
		};
	};

	var overlayHeight = function() {
		var liveHeight = $('.thumb-grid__grid-item').height();
		//change the height of the overlay
		gridOverlay.css({"height": liveHeight + "px"});
		// $("body").addClass("dummyClass").removeClass("dummyClass");
	};

	var gridTitleCenter = function() {
		gridOverlay = $('.no-touch .thumb-grid__overlay');
		gridTitle = $('.no-touch .thumb-grid__overlay .thumb-grid__title');
		for (i = 0; i < gridLength; i++) {
			var curItem = gridTitle[i];
			var titleHeight = $(curItem);
			var livePadding = ( $('.thumb-grid__grid-item').height() - titleHeight.height()) / 2;
			gridOverlay.css({"padding-top": livePadding + "px", "padding-bottom": livePadding + "px"});
			$("body").addClass("dummyClass").removeClass("dummyClass");
		};
	};


	$( window ).resize( btnFull );
	$( window ).resize( overlayHeight );
	$( window ).resize( gridTitleCenter );
	$( '.navicon-button' ).click( navBtn );

	btnFull();
	linkWrap();
	overlayHeight();
	gridTitleCenter();
});