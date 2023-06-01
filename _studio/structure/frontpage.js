export default Structure => {
	const { divider, editor, list, listItem, documentTypeList, documentTypeListItem} = Structure
	
	return list()
		.title('Content')
		.items([
			documentTypeListItem('pattern'), 

			listItem()
				.title('Blog Posts')
				.child(
				documentTypeList('blog')
			),
				divider(), 

				documentTypeListItem('yarn'),
				documentTypeListItem('brand'),
			]) 
};