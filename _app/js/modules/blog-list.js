import { sanity } from "../sanity.js";

export default async function BlogList() {
	const query = `*[_type == 'blog']{
		"slug": slug.current,
		"image": image.asset->url,
		"blogAltText": image.alt,
		title,
		preview,
	 }`;

	 const blogs = await sanity.fetch(query);

	 function createBlogListContainerDOM() {
		const blogListContainer = document.createElement('div');
			blogListContainer.className = 'blog-list grid grid__column-mobile--12';

		for (const blog of blogs) {
			const blogCard = document.createElement('a');
			const blogImageBox = document.createElement('figure');
			const blogImage = document.createElement('img')
			const blogTitle = document.createElement('div');
			const blogPreviewText = document.createElement('div');
		
			blogListContainer.appendChild(blogCard);
			blogImageBox.appendChild(blogImage);
			blogCard.appendChild(blogImageBox);
			blogCard.appendChild(blogTitle);
			blogCard.appendChild(blogPreviewText);

			blogCard.setAttribute('href',`/recipe/?${blog.slug}`);
			blogCard.className = 'blog__card grid__column--4 grid__column-mobile--12';
			blogImageBox.className = 'blog__image-box';

			console.log(blogCard);
			blogImage.className = 'blog__image';
			blogImage.src = blog.image;
			blogImage.alt = blog.blogAltText; 
			
			blogTitle.className = 'blog__title';
			blogTitle.innerText = blog.title;

			blogPreviewText.className = 'blog__preview';
			blogPreviewText.innerText = blog.preview;
		}
		
		return blogListContainer;
	}

	function renderHTML() {
		const mainElement = document.querySelector('.main-blog');
		const blogListContainer = createBlogListContainerDOM();

		document.body.appendChild(blogListContainer);
		mainElement.appendChild(blogListContainer);
	}
	renderHTML();
}