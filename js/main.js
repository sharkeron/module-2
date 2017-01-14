$(function () {

	$('header .slider').slick({
		draggable: false,
		arrows: true,
		prevArrow: $('header .btn-prev'),
		nextArrow: $('header .btn-next'),
		appendDots: $('.paginators'),
		dots: true
	});

	$(document).on('click', 'header .btn-next', function () {
		var tabId = $('header .slick-current').attr('data-slick-index');

		$('header .active[data-tab]').removeClass('active');
		$('header .numbers .number[data-tab="' + tabId + '"]').addClass('active');
		$('header .titles .title[data-tab="' + tabId + '"]').addClass('active');
	});

	$(document).on('click', 'header .btn-prev', function () {
		var tabId = $('header .slick-current').attr('data-slick-index');

		$('header .active[data-tab]').removeClass('active');
		$('header .numbers .number[data-tab="' + tabId + '"]').addClass('active');
		$('header .titles .title[data-tab="' + tabId + '"]').addClass('active');
	});

	$('.latest-project .slider').slick({
		// draggable: false,
		arrows: true,
		prevArrow: $('.latest-project .btn-prev'),
		nextArrow: $('.latest-project .btn-next'),
		appendDots: $('.paginators'),
		dots: true
	});


});
