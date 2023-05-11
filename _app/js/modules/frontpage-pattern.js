/**
  @TODO create the right path for the link of pattern titles
 */
import { sanity } from "../sanity.js";

export default async function FrontpagePattern() {
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

		frontpagePatternContainer.className = 'frontpage-pattern';

		frontpagePatternHeader.className = 'frontpage-pattern__header';
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
			
			frontpagePatternCard.className = 'frontpage-pattern__card';
			
			frontpagePatternImageBox.className = 'frontpage-pattern__image-box';

			frontpagePatternImage.className = 'frontpage-pattern__image';
			frontpagePatternImage.src = frontpagePattern.cover;
			frontpagePatternImage.alt = frontpagePattern.altText;

			console.log(frontpagePatternContainer);

			frontpagePatternTitle.className = 'frontpage-pattern__title';
			frontpagePatternTitle.innerText = frontpagePattern.title;

			frontpagePatternLink.className = 'frontpage-pattern__page-link';
			frontpagePatternLink.href = "/pattern/index.html"

		}
		return frontpagePatternContainer;
	}

	function renderHTML() {
		const frontpagePatternContainer = createFrontpagePatternContainerDOM();
		document.body.appendChild(frontpagePatternContainer);
	}

	renderHTML();
}