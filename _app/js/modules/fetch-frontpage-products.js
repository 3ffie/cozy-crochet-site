/*import { sanity } from "../sanity.js";

export default async function FetchProductFrontPage() {
	const patternFrontpage = `*[_type == "pattern"][0...3]{
		_id,
		title,
		"slug": slug.current,
		"cover": firstImage.asset->url, 
		"altText": firstImage.alt,
	 	}`;

	const blogFrontpage = `*[_type == "blog"][0...3]{
		_id,
		title,
      preview,
		"slug": slug.current,
		"image": image.asset->url, 
		"altText": image.alt, 
		}`;

	const carloquery = `[
		"patterns": *[_type == "pattern"][0...3]{
			_id,
			title,
			"slug": slug.current,
			"cover": firstImage.asset->url, 
			"altText": firstImage.alt,
			 },
		"blogs": *[_type == "blog"][0...3]{
			_id,
			title,
			preview,
			"slug": slug.current,
			"image": image.asset->url, 
			"altText": image.alt, 
			}
	]`

	 const frontpageProducts = await sanity.fetch(patternFrontpage);
	 
	 console.log(frontpageProducts);
	 return frontpageProducts;
}
// Made this function as a second attempt to fecth the blog posts for the frontpage.
// It did not work with first function, the pictures do not show. 
/*export async function blogs() {
	const blogFrontpagee = `*[_type == "blog"][0...3]{
		_id,
		title,
		preview,
		"slug": slug.current,
		"cover": image.asset->url, 
		"altText": image.alt, 
		}`;

		const fechedbloggis = await sanity.fetch(blogFrontpagee);
		return fechedbloggis;
}*/
