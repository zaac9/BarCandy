// alert();
// from: https://www.youtube.com/watch?v=gXkqy0b4M5g
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	//toggle nav
	burger.addEventListener('click', function(){
		nav.classList.toggle('nav-active');

		//animate links
		navLinks.forEach(function(link, index) {
			// console.log(index);
			if (link.style.animation) {
				link.style.animation = ''
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`;
			}
			console.log (index / 7);
		});

		// menu-btn.textContent = "X"
	});
}



navSlide();