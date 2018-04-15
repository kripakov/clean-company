$('.g').find('button').each(function(e,i){
	var id = $(i).attr('id');
	$(i).click(function(e){
		//console.log('klk',$('.content__text').find('div'));
		//$('.content__text').find('div').attr( "id" ).css('display', 'none');
		var that = $('.content__text .item'),
			thatid = that.attr( "id" );
		if(thatid){
			that.css('display', 'none');
		}
		$('.content__text').find('id').each(function(e,i){}).promise().done(function(){
			console.log('done');
			//console.log('el',$('.content__text').find('#' + id));
			//console.log(id);
			$('.content__text').find('#' + id).css('display', 'block');
			$('.content__text').find('#' + id).children('.content__body').addClass('animated bounceInRight');
			$('.content__text').find('#' + id).children('.navigation__include').addClass('animated bounceInRight');
		});
		
	})
})