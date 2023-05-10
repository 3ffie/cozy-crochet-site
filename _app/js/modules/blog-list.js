/**
 * @TODO put in alt text src and in query
 */
import { sanity } from "../sanity.js";

export default async function BlogList() {
	const query = `*[_type == 'blog']{
		"image": image.asset->url,
		"blogAltText": image.alt,
		title,
		preview,
	 }`;

	 const blogs = await sanity.fetch(query);

	 function createBlogListContainerDOM() {
		const blogListContainer = document.createElement('div');
			blogListContainer.className = 'blog-list';

		for (const blog of blogs) {
			const blogCard = document.createElement('div');
			const blogImageBox = document.createElement('figure');
			const blogImage = document.createElement('img')
			const blogTitle = document.createElement('div');
			const blogPreviewText = document.createElement('div');
		
			blogListContainer.appendChild(blogCard);
			blogImageBox.appendChild(blogImage);
			blogCard.appendChild(blogImageBox);
			blogCard.appendChild(blogTitle);
			blogCard.appendChild(blogPreviewText);

			blogCard.className = 'blog__card';
			blogImageBox.className = 'blog__image-box';

			console.log(blogCard);
			blogImage.className = 'blog__image';
			blogImage.src = blog.image;
			blogImage.alt = blog.blogAltText; 
			
			blogTitle.className = 'blog__title';
			blogTitle.innerText = blog.title;
	 	}
		
		return blogListContainer;
	}

	function renderHTML() {
		const blogListContainer = createBlogListContainerDOM();
		document.body.appendChild(blogListContainer);
	}

	renderHTML();
}