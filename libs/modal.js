$(document).ready(function() {
	var modal = $('#mdl'),
		btn = $('.description__button'),
		close = $('.mdl__close');

	btn.click(function(){
		modal.css(
			'display', 'block'
		);
	});

	close.click(function(){
		modal.css(
			'display', 'none'
		);
	});
})