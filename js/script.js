$(document).ready(function(){
    $('#rules_chevron_down').click(function(){
		$('.rules_wrapper .list_menu_wrap').slideToggle(300);
		$(this).toggleClass('rotate');
	});
	$('#filter').on('click',function(){
		$('.overlay').css('display','block');
		$('.filter_box_menu').css('display','initial');
	});
	$('.overlay').on('click',function(){
		$('.overlay').css('display','none');
		$('.filter_box_menu').css('display','none');
	});
});