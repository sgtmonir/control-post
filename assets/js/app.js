( function( $ ) {
	// Dynamic Copyright Year
	$('#year').text(new Date().getFullYear());
	
	// Background Img
	$(".bg-image").each(function() {
		var bgData = $(this).attr("data-bg-src");
		$(this).css('background-image', 'url(' +bgData+ ')');
	});

	//Masonry Init
	//$('.masonry-grid').masonry({});

} )( jQuery );

