(function ($) {

    'use strict';

	/*------------------------------------
		Mobile Menu
	--------------------------------------*/
	

	/*-------------------------------------------
	    Sticky Header
	--------------------------------------------- */

	let win = $(window);
	let sticky_id = $(".header-area");
	win.on('scroll', function () {
		let scroll = win.scrollTop();
		if (scroll < 245) {
			sticky_id.removeClass("sticky-header");
		} else {
			sticky_id.addClass("sticky-header");
		}
	});
	
	/*------------------------------------
        Data-Background
	--------------------------------------*/
	

	/*------------------------------------
		venobox
	--------------------------------------*/

	$('.venobox').venobox();

	

})(jQuery);
