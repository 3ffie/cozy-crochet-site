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
			title: 'Preview',
			name: 'preview',
			type: 'text',
			description: 'A short preview text that will display on the main blog page',
			rows: 3,
			validation: rule => rule.required().min(10).max(80)
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
		},
		{
			title: 'Blog Text',
			name: 'blogText',
			type: 'array',
			of: [
				{
					type: 'block'
				},
				{
					type: 'image',
					fields: [
						{	
							title: 'Alternative text',
							name: 'alt',
							type: 'string',
						}
					]
				}
			]
		}
	]
}