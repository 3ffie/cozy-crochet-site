// Found on: https://www.youtube.com/watch?v=zuAmsj2EN54

export default function Navigation() {
	const navigationHamburger = document.querySelector(".navigation__hamburger");
	const navigationList = document.querySelector(".navigation__list");

	navigationHamburger.addEventListener('click', () => {
		navigationHamburger.classList.toggle("active");
		navigationList.classList.toggle("active");
	});
	}

	