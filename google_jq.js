$(document).ready(function(){

    $('.search_box').click(function() {
        $('.search_box').removeClass('active')
        $(this).addClass('activeElement')
		$('.search').focus()
    });
	
	$('.search').focusout(function(){
		$('.search_box').removeClass('activeElement')
	});
	
});