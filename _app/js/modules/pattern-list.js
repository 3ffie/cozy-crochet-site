import { sanity } from "../sanity.js";

export default async function PatternList() {
	const query = `*[_type == 'pattern']{
		title,
		"slug": slug.current,
		"coverImage": firstImage.asset->url, 
		"altText": firstImage.alt,
	 }`;

	 const patterns = await sanity.fetch(query);

	 function createPatternListContainerDOM() {
		const patternListContainer = document.createElement('div');
			
			patternListContainer.className = 'pattern-list grid grid__column-mobile--12';
		// A for each so that all patterns get the same variables.
		for (const pattern of patterns) {
			const patternCard = document.createElement('a');
			const patternImageBox = document.createElement('figure');
			const patternImage = document.createElement('img')
			const patternTitle = document.createElement('div');
			
			// Attribute added so that when the patternCard is clicked, it redirect to a to the dynamic recipe page, with slug.current.
			patternCard.setAttribute('href',`/recipe/?${pattern.slug}`);

			patternListContainer.appendChild(patternCard);
			patternCard.appendChild(patternImageBox);
			patternCard.appendChild(patternTitle);
			patternImageBox.appendChild(patternImage);

			patternCard.className = 'pattern__card grid__column--4 grid__column-mobile--12';
			patternImageBox.className = 'pattern__image--box';
			
			patternImage.className = 'pattern__image';
			patternImage.src = pattern.coverImage;
			patternImage.alt = pattern.altText;
			
			patternTitle.className = 'pattern__title';
			patternTitle.innerText = pattern.title;
		}
		return patternListContainer;
	}

	 function renderHTML() {
		//I append main-blog in index to the container so that the footer will lay under the content from Sanity. 
		const mainElement = document.querySelector('.main-pattern'); 
		const patternListContainer = createPatternListContainerDOM();

		document.body.appendChild(patternListContainer);
		mainElement.appendChild(patternListContainer);
	 }
	 renderHTML();
}