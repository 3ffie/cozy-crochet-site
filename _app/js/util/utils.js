export function readUrl() {
	const allUrl = window.location.href;
	if	(allUrl.includes('about')) {
		 return 'about'
	}

	if	(allUrl.includes('recipe')) {
		 const urlString = window.location.search;
		 if	(urlString) {
			  return (urlString.slice(1)); // slice remove the "?" from the url
		 }
	}
 
	// I think may use this for the blog posts page
	/*if	(allUrl.includes('blog')) {
		 const urlString = window.location.search;
		 if	(urlString) {
			  return (urlString.slice(1)); // slice remove the "?" from the url
		 }
	}*/
	return allUrl;
};

