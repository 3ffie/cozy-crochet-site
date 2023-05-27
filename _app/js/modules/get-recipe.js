//write the code here

import { readUrl } from "../util/utils.js";
import { sanity } from "../sanity.js"


export default async function GetRecipeSlug() {
	
	const slug = readUrl();

	const query = `*[_type == 'pattern' && slug.current =="${slug}"]{
		_id,
		title,
		"slug": slug.current,
		"coverImage": firstImage.asset->url, 
		"altText": firstImage.alt,
		description,
		materials,
		yarn,
		Instruction[]{
			_type == "image" => {
				...,
				assets->
			}
		}
	}`;
	
	const recipe = await sanity.fetch(query)
	console.log(recipe);
	
	
	console.log(slug);
	
	
	function createRecipeContainerDOM(){
		const recipeContainer = document.createElement('div');
		recipeContainer.className = 'recipe__box';
		
		
			const recipeTitle = document.createElement('div');
			
			recipeTitle.textContent = `${recipe[0].title}`;
			recipeTitle.className = 'recipe__title';
			
			recipeContainer.appendChild(recipeTitle);
			//recipeContainer.innerText(`${slug.recipe.title}`)
			
	
		
		return recipeContainer;
	}
	
	function renderHTML() {
		const recipeContainer = createRecipeContainerDOM();
		document.body.appendChild(recipeContainer);
	}
	renderHTML();
}


/*export default async function (patterns) {



	const conatiner = document.querySelector('.pattern');
	const searchParam = new URLSearchParams(window.location.search);
	const recipeSlug = searchParam.get('pattern');
	patterns.forEach(pattern => {
		console.log(pattern.slug)
	})
	/*console.log('recipe');
	const slug = readUrl();
	console.log(slug)*/


/*{$slug.recpie}*/
