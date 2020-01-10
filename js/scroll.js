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


let links = document.querySelectorAll('.local-page')
let ids = []
let pos = []
links.forEach(link => {
	link = String(link.href)
	let index = link.indexOf("#")
	let id = link.slice(index)
	ids.push(id)
	pos.push(document.querySelector(id).offsetTop)
})

window.addEventListener('scroll', function(){
	let scrollPage = window.pageYOffset
	pos.forEach((position, index) => {
		console.log(scrollPage , position)
		if(scrollPage >= position){
			$('.local-page').removeClass('active');
			let component = document.querySelector(".local-page[href='"+ids[index]+"']")
			component.classList.add("active")
		}
	})
})

