import { sanity } from "../sanity.js";

export default async function FetchPatternFrontPage() {
	const query = `*[_type == "pattern"][0...3]{
		title,
		"slug": slug.current,
		"cover": firstImage.asset->url, 
		"altText": firstImage.alt,
	 }`;
	
	 const frontpagePatterns = await sanity.fetch(query);
	 
	 console.log(frontpagePatterns);
	 return frontpagePatterns;
}
