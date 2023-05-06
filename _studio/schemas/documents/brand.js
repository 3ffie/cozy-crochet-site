export default {
	title: 'Brand',
	name: 'brand',
	type: 'document',
	fields: [
		{
			title: 'Yarn Brand',
			name: 'yarnBrand',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'yarnBrand'
			}
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image',
		}
	]	
}