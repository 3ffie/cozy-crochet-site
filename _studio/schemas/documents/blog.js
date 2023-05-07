export default {
	title: 'Blog',
	name: 'blog',
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
			title: 'Image',
			name: 'image',
			type: 'image',
			validiation: rule => rule.required(),
			options: {
            hotspot: true,
          },
			fields: [
				{
					title: 'Alternative text',
					name: 'alt',
					type: 'string',
					validation: rule => rule.required()
				}
			]
		},
		{
			title: '',
			name: '',
			type: '',
		}
	]
}