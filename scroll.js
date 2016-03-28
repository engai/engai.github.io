jQuery(document).ready(function($) {

	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
		$(this).animate({})
	});

	$(".nav ul li a").hover(function(){
		$(this).css({borderBottom: '0px solid #ffffff'}).animate({'borderWidth': '3px'}, 100);}, function(){
			$(this).animate({borderWidth: 0}, 100);
	});

	$(".name, .nav").hide().fadeIn(1100);

	$('.project-button').hover(function(){
		$(this).animate({'backgroundColor':'black'}, 500);}, function(){
			$(this).animate({'background':'none'}, 500);

	});

});
