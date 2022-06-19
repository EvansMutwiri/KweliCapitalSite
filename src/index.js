document.addEventListener("DOMContentLoaded", function() {

	document.querySelector('.hamburger').addEventListener("click", function() {
		this.classList.toggle("hamburger--active");
		document.querySelector(".nav-fullscreen").classList.toggle("nav-fullscreen--open");
	});
	
});