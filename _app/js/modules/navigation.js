// Found on: https://www.youtube.com/watch?v=zuAmsj2EN54

export default function Navigation() {
	const navigationHamburger = document.querySelector(".navigation__hamburger");
	const navigationList = document.querySelector(".navigation__list");

	//When clicked, the the class in navigationHamburger and navigationList is toggled so that 
	// it's placed on active. This therefor makes the hamburger menu visible.
	// When clicked again it toogles back to its original place.
	navigationHamburger.addEventListener('click', () => {
		navigationHamburger.classList.toggle("active");
		navigationList.classList.toggle("active");
	});
	}

	