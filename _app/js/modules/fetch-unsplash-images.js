import { clientID } from "../env.js";

export default async function FetchUnsplashImages() {
	const baseUrl = 'https://api.unsplash.com/';
	const collectionID = 'j3Z41iologs';
	const options = {
		method: "GET",
		headers: {
			"Accept-Version": "v1"
		}
	}
	const endpointCollection = `${baseUrl}collections/${collectionID}/photos?client_id=${clientID}`;
	const imageDisplay = document.querySelector('.main-frontpage__image');
	
	// For this function i used the example from this video : https://www.youtube.com/watch?v=m_KtZDl7J1k.
	// I wanted to use .then because i understand this method of async funtion more than try/catch.

	// Here the function takes the response in json, then the data gets a random number from radnomNumber fuction
	// and returnes the image url in the regular size. 
	// when the page reloades a new image will display. 
	let randomImage = await getNewImage();
		console.log(randomImage)
		imageDisplay.src = randomImage;
	
	async function getNewImage() {
		let randomNumber = Math.floor(Math.random() * 10);

		return fetch(endpointCollection, options)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);

			let image = data[randomNumber];
			return image.urls.regular;
		});
	}
}
