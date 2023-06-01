import Navigation from "./modules/navigation.js";
import FetchUnsplashImages from "./modules/fetch-unsplash-images.js";
import FrontpagePatterns from "./modules/frontpage-pattern.js";
import FrontpageBlogs from "./modules/frontpage-blog.js";
//import PatternList from "./modules/pattern-list.js";
//import BlogList from "./modules/blog-list.js";

Navigation();
await FetchUnsplashImages();
await FrontpagePatterns();
await FrontpageBlogs();
//await PatternList();
//await BlogList();

