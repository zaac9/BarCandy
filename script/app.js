// alert();
// init();


////// from: https://www.youtube.com/watch?v=gXkqy0b4M5g
const navSlide = function(){
	const burger 	= document.querySelector('.menu-container');
	const nav 		= document.querySelector('.nav-links');
	const navLinks  = document.querySelectorAll('.nav-links li');
	// const menuButton = document.querySelector('.burger .menu-btn');

	//toggle nav
	burger.addEventListener('click', function(){

		nav.classList.toggle('nav-active');

		//animate links
		navLinks.forEach(function(link, index) {
			// console.log(index);
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`;
			}
			console.log (index / 7);
		});
		// menu-btn.textContent = "X"
	});
}
navSlide();

const updateText = function() {
	let menuButton = document.querySelector('.menu-btn');
	// 	//chagne text on menu
	menuButton.addEventListener('click', function(){
		// alert();
		// TextContent and styling is my own learning (not from video)
		if (menuButton.textContent==="Menu") {
			menuButton.textContent="Close";
			menuButton.style.color="#d13d3d"
			menuButton.style.borderColor="#d13d3d"
		} else {
			menuButton.textContent="Menu";
			menuButton.style.color="#309499"
			menuButton.style.borderColor="#309499"
		}
	});
}
updateText();
// navSlide();




// init();

// function updateText(){
// 	//chagne text on menu
// 	menuButton.addEventListener('click', function() {
// 		menuButton.textContent="Close";
// 	// 	if (menuButton.textContent === "Menu" {
// 	// 		menuButton.textContent = "Close";
// 	// 	} else {
// 	// 		menuButton.textContent = "Menu";
// 	// 	}
// 	// });
// 	}
// }



// navSlide();