document.addEventListener("DOMContentLoaded", function() {

	document.querySelector('.hamburger').addEventListener("click", function() {
		this.classList.toggle("hamburger--active");
		document.querySelector(".nav-fullscreen").classList.toggle("nav-fullscreen--open");
	});
	
});

// var myNav = document.getElementById('nav');
// window.onscroll = function () { 
//     if (document.body.scrollHeight >= 600 ) {
//         myNav.classList.add("bg-white");
//         myNav.classList.remove("bg-transparent");
// 		myNav.classList.add("text-black")
//     } 
//     else {
//         myNav.classList.add("bg-transparent");
//         myNav.classList.remove("bg-white");
// 		myNav.classList.remove("text-black")
//     }
// };