/**
  @TODO create the right path for the link of pattern titles
 */
import FetchProductFrontPage from "./fetch-frontpage-pattern.js";

export default async function FrontpagePatterns() {
/*	const query = `*[_type == "pattern"][0...3]{
		title,
		"slug": slug.current,
		"cover": firstImage.asset->url, 
		"altText": firstImage.alt,
	 }`;

	 const frontpagePatterns = await sanity.fetch(query);*/
const frontpagePatterns = await FetchProductFrontPage();

	 function createFrontpagePatternContainerDOM() {
		const frontpagePatternContainer = document.createElement('div');
		const frontpagePatternHeader = document.createElement('h3');
		const frontpagePatternButton = document.createElement('a');

		frontpagePatternContainer.className = 'frontpage-pattern grid';

		frontpagePatternHeader.className = 'frontpage-pattern__header grid__column--12';
		frontpagePatternHeader.textContent = 'AVAILABLE PATTERNS';

		frontpagePatternButton.className = 'frontpage-pattern__button';
		frontpagePatternButton.textContent = 'See More';
		frontpagePatternButton.href = "/pattern/index.html"; 
		
		frontpagePatternContainer.appendChild(frontpagePatternHeader);
		frontpagePatternContainer.appendChild(frontpagePatternButton);
		
		for (const frontpagePattern of frontpagePatterns) {
			const frontpagePatternCard = document.createElement('div');
			
			const frontpagePatternLink = document.createElement('a');
			const frontpagePatternImageBox = document.createElement('figure');
			const frontpagePatternImage = document.createElement('img');
			const frontpagePatternTitle = document.createElement('div');
			
			
			frontpagePatternContainer.appendChild(frontpagePatternCard);
			frontpagePatternCard.appendChild(frontpagePatternImageBox);
			frontpagePatternImageBox.appendChild(frontpagePatternImage);
			
			frontpagePatternCard.appendChild(frontpagePatternLink);
			frontpagePatternCard.appendChild(frontpagePatternTitle);
			frontpagePatternLink.appendChild(frontpagePatternTitle);
			
			frontpagePatternCard.className = 'frontpage-pattern__card grid__column--2';
			
			frontpagePatternImageBox.className = 'frontpage-pattern__image-box';

			frontpagePatternImage.className = 'frontpage-pattern__image';
			frontpagePatternImage.src = frontpagePattern.cover;
			frontpagePatternImage.alt = frontpagePattern.altText;

			frontpagePatternTitle.className = 'frontpage-pattern__title';
			frontpagePatternTitle.innerText = frontpagePattern.title;

			frontpagePatternLink.className = 'frontpage-pattern__page-link';
			frontpagePatternLink.href = "/pattern/index.html"
			console.log(frontpagePatternContainer);
		}
		return frontpagePatternContainer;
	}

	function renderHTML() {
		const frontpagePatternContainer = createFrontpagePatternContainerDOM();
		document.body.appendChild(frontpagePatternContainer);
	}
	renderHTML();
}

