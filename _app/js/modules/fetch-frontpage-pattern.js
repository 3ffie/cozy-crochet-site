import { sanity } from "../sanity.js";

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

	 const frontpageProducts = await sanity.fetch(patternFrontpage, blogFrontpage);
	 
	 console.log(blogFrontpage);
	 return frontpageProducts;
}

export async function blogs() {
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
}
