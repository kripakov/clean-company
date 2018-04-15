$(document).ready(function(){
	$('.isotope').on('click', 'a', function() {
		var filterValue = $( this ).attr('data-filter');
		console.log(filterValue);
		$('.grid__wrap').isotope({
			filter: filterValue
		});
	});
});