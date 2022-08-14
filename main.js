const topNav = document.getElementById('top-nav');
const topNavbarSupportedContent = document.getElementById('topNavbarSupportedContent')
const setNavbar = function() {
	"use strict";
	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
		topNav.classList.remove("bg-transparent");
		topNav.classList.remove("navbar-dark");
		topNav.classList.add("bg-white");
		topNav.classList.add("shadow");
	} 
	else {
		topNav.classList.add("bg-transparent");
		topNav.classList.add("navbar-dark");
		topNav.classList.remove("bg-white");
		topNav.classList.remove("shadow");
	}	
}
window.onscroll = function () { 
	setNavbar();
};
window.onload = function(event) {
	setNavbar();
};