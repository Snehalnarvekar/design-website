$(document).ready(function(){
    $('#rules_chevron_down').click(function(){
		$('.rules_wrapper .list_menu_wrap').slideToggle(300);
		$(this).toggleClass('rotate');
	});
});