$( document ).ready(function(){

//Get started!
$(window).scroll(function(){

var wScroll = $(this).scrollTop();

var storyFade = [".johnny-town", ".squirrel-nutkin", ".benjamin-bunny" , ".two-bad-mice", ".mr-tod"];

storyFade.forEach(function(storyFade){
   if(wScroll > $(storyFade).offset().top-500){
   	$(storyFade).each(function(){
        $(storyFade).children().addClass('is-showing');
    });
  }
});

//closing document ready and window scroll
}); 
});







