export default {
	title: 'Pattern',
	name: 'pattern',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			validation: rule => rule.required(),
			options: {
				source: 'title'
			}
		},
		{
			title: 'First Image',
			name: 'firstImage',
			type: 'image',
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
		}

	]
}