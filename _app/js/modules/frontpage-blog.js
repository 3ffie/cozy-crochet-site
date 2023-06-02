/**
 * @todo fix the path to blog and the fetch file. 
 * make the pictures show up
 */
import { sanity } from "../sanity.js";

export default async function FrontpageBlogs() {
	const query = `*[_type == "blog"][0...3]{
		_id,
		title,
      preview,
		"slug": slug.current,
		"image": image.asset->url, 
		"altText": image.alt, 
		}`;

	const frontpageBlogs = await sanity.fetch(query);

	function createFrontpageBlogContainerDOM() {
		const frontpageBlogContainer = document.createElement('div');
		const frontpageBlogHeader = document.createElement('h3');
		
		frontpageBlogContainer.className = 'frontpage-blog grid';

		frontpageBlogHeader.className = 'frontpage-blog__header grid__column--12';
		frontpageBlogHeader.textContent = 'LATEST BLOG POSTS';

		frontpageBlogContainer.appendChild(frontpageBlogHeader);

		for (const frontpageBlog of frontpageBlogs) {
			const frontpageBlogCard = document.createElement('a');
			const frontpageBlogImageBox = document.createElement('figure');
			const frontpageBlogImage = document.createElement('img');
			const frontpageBlogPreview = document.createElement('div');
			const frontpageBlogTitle = document.createElement('div');

			frontpageBlogContainer.appendChild(frontpageBlogCard);
			frontpageBlogCard.appendChild(frontpageBlogImageBox);
			frontpageBlogImageBox.appendChild(frontpageBlogImage);
			frontpageBlogCard.appendChild(frontpageBlogTitle);
			frontpageBlogCard.appendChild(frontpageBlogPreview);
			frontpageBlogCard.setAttribute('href',`/recipe/?${frontpageBlog.slug}`);
			// At the moment the content in the blog posts are empty when clicked and i will add more content in them soon.
			
			// The blog posts have a wrong href path appended to them.
			// I need to redirect the "blog card" to a new index and make a new function 
			// for the blog posts dynamic page. This so that it does not collide with the already made function for recipies.

			frontpageBlogCard.className = 'frontpage-blog__card grid__column--4 grid__column-mobile--12';

			frontpageBlogImageBox.className = 'frontpage-blog__image--box';
			frontpageBlogImage.className = 'frontpage-blog__image';
			
			frontpageBlogImage.src = frontpageBlog.image;
			frontpageBlogImage.alt = frontpageBlog.altText;
			
			frontpageBlogPreview.className = 'frontpage-blog__preview'
			frontpageBlogPreview.innerText = frontpageBlog.preview;
			
			frontpageBlogTitle.className = 'frontpage-blog__title';
			frontpageBlogTitle.innerText = frontpageBlog.title;
			
			//console.log(frontpageBlogContainer);
		}
		return frontpageBlogContainer
	}
	function renderHTML() {
		const mainElement = document.querySelector(".main-frontpage__script")
		const frontpageBlogContainer = createFrontpageBlogContainerDOM();
		
		document.body.appendChild(frontpageBlogContainer);
		mainElement.appendChild(frontpageBlogContainer);
	}
	renderHTML();
}