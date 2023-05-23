import FetchProductFrontPage from "./fetch-frontpage-pattern.js";
import { blogs } from "./fetch-frontpage-pattern.js";

export default async function FrontpageBlogs() {

	//const fetchedBlogs = await fetch(blogFrontpage);
	const frontpageBlogs = await blogs();
	//const blogies = blogs();


	/**
	 * 
	 * @returns 
	 * @todo fix the path to blog and the fetch file. 
	 * maake the picture show up
	 * make it pretty!!
	 */

	function createFrontpageBlogContainerDOM() {
		const frontpageBlogContainer = document.createElement('div');
		const frontpageBlogHeader = document.createElement('h3');
		
		frontpageBlogContainer.className = 'frontpage-blog';

		frontpageBlogHeader.className = 'frontpage-blog__header';
		frontpageBlogHeader.textContent = 'LATEST BLOG POSTS';

		frontpageBlogContainer.appendChild(frontpageBlogHeader);

		for (const frontpageBlog of frontpageBlogs) {
			const frontpageBlogCard = document.createElement('div');

			const frontpageBlogImageBox = document.createElement('figure');
			const frontpageBlogImage = document.createElement('image');
			const frontpageBlogPreview = document.createElement('div');
			const frontpageBlogTitle = document.createElement('div');

			frontpageBlogContainer.appendChild(frontpageBlogCard);
			frontpageBlogCard.appendChild(frontpageBlogImageBox);
			frontpageBlogImageBox.appendChild(frontpageBlogImage);

			frontpageBlogCard.appendChild(frontpageBlogTitle);
			frontpageBlogCard.appendChild(frontpageBlogPreview);

			frontpageBlogCard.className = 'frontpage-blog__card';

			frontpageBlogImageBox.className = 'frontpage-blog__image-box';
			frontpageBlogImage.className = 'frontpage-blog__image';
			
			frontpageBlogImage.src = frontpageBlog.cover;
			frontpageBlogImage.alt = frontpageBlog.altText;
			
			frontpageBlogPreview.className = 'frontpage-blog__preview'
			frontpageBlogPreview.innerText = frontpageBlog.preview;
			
			frontpageBlogTitle.className = 'frontpage-blog__title';
			frontpageBlogTitle.innerText = frontpageBlog.title;
			
			console.log(frontpageBlogContainer);
		}
		return frontpageBlogContainer
	}
	function renderHTML() {
		const frontpageBlogContainer = createFrontpageBlogContainerDOM();
		document.body.appendChild(frontpageBlogContainer);
	}
	renderHTML();
}