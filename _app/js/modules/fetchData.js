import { sanity } from "../sanity.js";

export default async function fetchData() {
	const query = `*[_type == 'pattern']{
		title,
		"slug": slug.current,
		"coverImage": firstImage.asset->url, 
		"altText": firstImage.alt,
	 }`;

	 const patterns = await sanity.fetch(query);
	 console.log(patterns)
	
	 return patterns;
}