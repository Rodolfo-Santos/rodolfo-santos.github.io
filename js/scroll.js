$('.local-page').click(function (e) {
	e.preventDefault();
	var id = $(this).attr('href'),
		menuHeight = $('nav').innerHeight(),
		targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight - 100
	}, 1000);

	$('.local-page').removeClass('active');
	$(this).addClass('active');
});