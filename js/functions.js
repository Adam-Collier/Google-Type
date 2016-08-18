$( document ).ready(function(){

//Get started!
$(window).scroll(function(){

var wScroll = $(this).scrollTop();


if(wScroll > $('.johnny-town').offset().top-500){
	
	$('.johnny-town').each(function(){
		$('.johnny-town').children().addClass('is-showing');
	});
}

	
if(wScroll > $('.squirrel-nutkin').offset().top-500){
	$('.squirrel-nutkin').each(function(){
		$('.squirrel-nutkin').children().addClass('is-showing');
	});
}

if(wScroll > $('.benjamin-bunny').offset().top-500){
	$('.benjamin-bunny').each(function(){
		$('.benjamin-bunny').children().addClass('is-showing');
	});
}

if(wScroll > $('.two-bad-mice').offset().top-500){
	$('.two-bad-mice').each(function(){
		$('.two-bad-mice').children().addClass('is-showing');
	});
}

//closing document ready and window scroll
}); 
});





