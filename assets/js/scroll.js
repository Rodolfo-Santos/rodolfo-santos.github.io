var links = document.querySelectorAll('.local-page')
var	menuHeight = $('nav').innerHeight()

$('.local-page').click(function (e) {
	e.preventDefault();
	var id = $(this).attr('href'),
		alvo = $(id).offset().top - menuHeight - 50
	$('html, body').animate({
		scrollTop: alvo
	}, 1000);
});


window.addEventListener('scroll', scrollPage)

function scrollPage(){
	let pagePosition = window.pageYOffset;
	let banner = $("#banner").offset().top,
			sobre = $("#sobre").offset().top,
			qualificacoes = $("#qualificacoes").offset().top,
			trajetoria = $("#trajetoria").offset().top,
			portifolio = $("#portifolio").offset().top;
			contato = $("#contato").offset().top;
	
	let calc = menuHeight - 400

	links.forEach(link => link.classList.remove("active"))
	if(pagePosition <= sobre + calc) links[0].classList.add("active")
	else if(pagePosition <= qualificacoes + calc) links[1].classList.add("active")
	else if(pagePosition <= trajetoria + calc) links[2].classList.add("active")
	else if(pagePosition <= portifolio + calc) links[3].classList.add("active")
	else if(pagePosition <= contato + calc) links[4].classList.add("active")
	else links[5].classList.add("active")


	if(pagePosition > 0){
		$(".btn-upper").fadeIn(1000)
	} else{
		$(".btn-upper").fadeOut(1000)
	}
}