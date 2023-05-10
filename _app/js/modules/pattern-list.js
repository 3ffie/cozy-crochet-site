import { sanity } from "../sanity.js";

export default async function patternList() {
	const query = `*[_type == 'pattern']{
		title,
		"coverImage": firstImage.asset->url, 
		"altText": firstImage.alt,
	 }`;

	 const patterns = await sanity.fetch(query);

	 function createPatternListContainerDOM() {
		const patternListContainer = document.createElement('div');
			patternListContainer.className = 'pattern-list';

		for (const pattern of patterns) {
			const patternCard = document.createElement('div');
			const patternImageBox = document.createElement('figure');
			const patternImage = document.createElement('img')
			const patternTitle = document.createElement('div');
		
			patternListContainer.appendChild(patternCard);
			patternCard.appendChild(patternTitle);
			patternCard.appendChild(patternImageBox);
			patternImageBox.appendChild(patternImage);

			patternCard.className = 'pattern__card';
			patternImageBox.className = 'pattern__image-box';
			
			patternImage.className = 'pattern__image';
			patternImage.src = pattern.coverImage;
			patternImage.alt = pattern.altText;
			
			patternTitle.className = 'pattern__title';
			patternTitle.innerText = pattern.title;
		}

		return patternListContainer;
	}

	 function renderHTML() {
		const patternListContainer = createPatternListContainerDOM();
		document.body.appendChild(patternListContainer);
	 }

	 renderHTML();
}