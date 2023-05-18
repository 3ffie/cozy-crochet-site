import FrontpagePattern from "./modules/frontpage-pattern.js";
import PatternList from "./modules/pattern-list.js";
import BlogList from "./modules/blog-list.js";
import Navigation from "./modules/navigation.js";

import GetRecipe from "./modules/get-recipe.js";
//import { readUrl } from "./util/utils.js";
//import recipe from "./modules/get-recipe.js";
//import fetchData from "./modules/fetchData.js";



//const fetchedData = fetchData();
//const url = readUrl();

/*if (url.includes('recipe')) {
	console.log('in i recipe')
	recipe();
}*/
//console.log(fetchedData);
await FrontpagePattern();
//await PatternList();
//await BlogList();
Navigation();
//recipe();

