import FetchUnsplashImages from "./modules/fetch-unsplash-images.js";
import FrontpagePatterns from "./modules/frontpage-pattern.js";
import FrontpageBlogs from "./modules/frontpage-blog.js";
import PatternList from "./modules/pattern-list.js";
import BlogList from "./modules/blog-list.js";
import Navigation from "./modules/navigation.js";

import GetRecipe from "./modules/get-recipe.js";

//import blogFrontpage from "./modules/frontpage-pattern.js"
//const fetchFrontpageBlogs = blogFrontpage();

await FetchUnsplashImages();
await FrontpagePatterns();
await FrontpageBlogs();
Navigation();
//await PatternList();
//await BlogList();
//recipe();

