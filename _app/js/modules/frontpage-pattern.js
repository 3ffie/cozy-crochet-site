/**
  @TODO create the right path for the link of pattern titles
 */

import { sanity } from "../sanity.js";

export default async function FrontpagePatterns() {
	const query = `*[_type == "pattern"][0...3]{
		title,
		"slug": slug.current,
		"cover": firstImage.asset->url, 
		"altText": firstImage.alt,
	 }`;

	 const frontpagePatterns = await sanity.fetch(query);

	 function createFrontpagePatternContainerDOM() {
		const frontpagePatternContainer = document.createElement('div');
		const frontpagePatternHeader = document.createElement('h3');
		const frontpagePatternButton = document.createElement('a');

		frontpagePatternContainer.className = 'frontpage-pattern grid';

		frontpagePatternHeader.className = 'frontpage-pattern__header grid__column--12';
		frontpagePatternHeader.textContent = 'AVAILABLE PATTERNS';

		frontpagePatternButton.className = 'frontpage-pattern__button grid__column--12';
		frontpagePatternButton.textContent = 'See More';
		frontpagePatternButton.href = "/patterns/index.html"; 
		
		frontpagePatternContainer.appendChild(frontpagePatternHeader);
		frontpagePatternContainer.appendChild(frontpagePatternButton);
		
		for (const frontpagePattern of frontpagePatterns) {
			const frontpagePatternCard = document.createElement('div');
			
			const frontpagePatternImageBox = document.createElement('figure');
			const frontpagePatternImage = document.createElement('img');
			const frontpagePatternTitle = document.createElement('div');
			const frontpagePatternLink = document.createElement('a');
			
			
			frontpagePatternContainer.appendChild(frontpagePatternCard);
			frontpagePatternCard.appendChild(frontpagePatternImageBox);
			frontpagePatternImageBox.appendChild(frontpagePatternImage);
			
			frontpagePatternCard.appendChild(frontpagePatternLink);
			frontpagePatternCard.appendChild(frontpagePatternTitle);
			frontpagePatternLink.appendChild(frontpagePatternTitle);
			
			frontpagePatternCard.className = 'frontpage-pattern__card grid__column--4 grid__column-mobile--12';
			
			frontpagePatternImageBox.className = 'frontpage-pattern__image--box';

			frontpagePatternImage.className = 'frontpage-pattern__image';
			frontpagePatternImage.src = frontpagePattern.cover;
			frontpagePatternImage.alt = frontpagePattern.altText;

			frontpagePatternTitle.className = 'frontpage-pattern__title';
			frontpagePatternTitle.innerText = frontpagePattern.title;
			
			// Attribute added so that patternCard is given a path to the dynamic recipe page, with slug.current.
			frontpagePatternLink.setAttribute('href',`/recipe/?${frontpagePattern.slug}`);
			frontpagePatternLink.className = 'frontpage-pattern__page-link';
			console.log(frontpagePatternContainer);
		}
		return frontpagePatternContainer;
	}

	function renderHTML() {
		const mainElement = document.querySelector('.main-frontpage__script')
		const frontpagePatternContainer = createFrontpagePatternContainerDOM();
		
		document.body.appendChild(frontpagePatternContainer);
		mainElement.appendChild(frontpagePatternContainer)
	}
	renderHTML();
}

