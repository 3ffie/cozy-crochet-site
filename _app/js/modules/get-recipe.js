//writw the code here

import { readUrl } from "../util/utils.js";
import { sanity } from "../sanity.js"

export default async function GetRecipeSlug() {
	const query = `*[_type == 'pattern']{
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
	
	const recipes = await sanity.fetch(query)
	console.log(recipes);
	
	const slug = readUrl();
	console.log(slug);
	
	
	if (slug !== undefined) {
		console.log(slug);
	}
	
	function createRecipeContainerDOM(){
		const recipeContainer = document.createElement('div');
		recipeContainer.className = 'recipe__box';
		
		
		for (const recipe of recipes) {
			const filterPatternList = recipes.filter(recipes => recipes.title === slug);
			console.log(filterPatternList);
		
			//const recipeTitle = document.createElement('div');
			
			//recipeTitle.innerText = `${filterPatternList}`;
			//recipeTitle.className = 'recipe__title';
			
			recipeContainer.appendChild(filterPatternList);
			//recipeContainer.innerText(`${slug.recipe.title}`)
			
		}
		
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
