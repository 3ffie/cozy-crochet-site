/*import renderImage from "./render-unsplash-images.js";*/

export default async function FetchUnsplashImages() {
	const clientID = 'vBx-m6gPaCUANQ5Nal6Mzclyo6l_JI-yiSUs-CBLWmQ';
	const baseUrl = 'https://api.unsplash.com/';
	const collectionID = 'j3Z41iologs';
	const options = {
		method: "GET",
		headers: {
			"Accept-Version": "v1"
		}
	}
	const endpointCollection = `${baseUrl}collections/${collectionID}/photos?client_id=${clientID}`;

	
	const getImageContainer = document.querySelector('.main-frontpage__image-container');
	const imageDisplay = document.querySelector('.main-frontpage__image');
	
	// For this function i used the example from this video : https://www.youtube.com/watch?v=m_KtZDl7J1k
	
		let randomImage = await getNewImage();
		console.log(randomImage)
		imageDisplay.src = randomImage;
	

	async function getNewImage() {
		let randomNumber = Math.floor(Math.random() * 10);
		return fetch(endpointCollection)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			let image = data[randomNumber];
			console.log(image)
			return image.urls.regular;
		});
	}




	/*const response = await fetch(endpointCollection, options);
	const output = await response.json();
	console.log(output);

	renderImage`${output.alt_description}`;
	return output;*/

}
