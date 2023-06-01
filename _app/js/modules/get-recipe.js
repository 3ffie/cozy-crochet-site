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
		recipeContainer.className = 'recipe__container';
		
			const recipeTitle = document.createElement('h3');
			const recipeCover = document.createElement('img');
			const recipeDescription = document.createElement('div');
			const recipeMaterials = document.createElement('li');
			const recipeYarn = document.createElement('div');
			const recipeInstructionBox = document.createElement('div');
			const recipeInstruction = document.createElement('div');

			recipeDescription.className = 'recipe__description';
			recipeMaterials.className = 'recipe__materials';
			recipeYarn.className = 'recipe__yarn';
			recipeInstructionBox.className = 'recipe__Instruction--box';
			recipeInstruction.className = 'recipe__Instruction';
		
			
			recipeTitle.textContent = `${recipe[0].title}`;
			recipeTitle.className = 'recipe__title';
			
			recipeCover.className = 'recipe__cover';
			recipeCover.src = `${recipe[0].coverImage}`;
			recipeCover.alt = `${recipe[0].altText}`;

			recipeDescription.textContent = `${recipe[0].description}`;
			recipeMaterials.textContent = `${recipe[0].materials}`;
			recipeYarn.textContent = `${recipe[0].yarn}`;
			recipeInstruction.textContent = `${recipe[0].Instruction.assets}`;

			recipeContainer.appendChild(recipeTitle);
			recipeContainer.appendChild(recipeCover);
			recipeContainer.appendChild(recipeDescription);
			recipeContainer.appendChild(recipeMaterials);
			recipeContainer.appendChild(recipeYarn);
			recipeContainer.appendChild(recipeInstructionBox);
			recipeInstructionBox.appendChild(recipeInstruction);

		return recipeContainer;
	}
	
	function renderHTML() {
		const recipeContainer = createRecipeContainerDOM();
		document.body.appendChild(recipeContainer);
	}
	renderHTML();
}