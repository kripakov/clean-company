$(document).ready(function() {
	$('.pick').find('span').each(function(i,e){
	//$(e).css('display','none');
	$(e).click(function(){
			//console.log($(this).attr('id'));
			var id = $(this).attr('id');
			$('.plan').css('display','none');
			if(id){
				$('.plan_i_' + id).css('display','block');
				$('.plan_i_' + id).addClass('animated zoomIn');
			}
		});
	});
});