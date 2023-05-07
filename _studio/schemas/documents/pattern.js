/**
 * @TODO make a on field for yarn
 *
 */
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
			title: 'Description',
			name: 'description',
			type: 'text',
		},
		{
			title: 'Materials',
			name: 'materials',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							title: 'Item',
							name: 'item',
							type: 'string',
						},
					]
				},
			]
		},
		{
			title: 'Yarn',
			name: 'yarn',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							title: 'Yarn',
							name: 'yarn',
							type: 'reference',
							to: {type: 'yarn'}
						},
						{
							title: 'Quantity',
							name: 'Quantity',
							type: 'number',
						}
					]
				}
			]
			/*fields: [
				{
					title: 'Yarn',
					name: 'yarn',
					type: 'array',
					of: [
						{type: 'yarn'}
					]
				},
				{
					title: 'Quantity',
					name: 'Quantity',
					type: 'number',
				},
			]*/
		},
		{
			title: 'Instructions',
			name: 'Instruction',
			type: 'array',
			of: [
				{type: 'block'},
				{type: 'image',
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative text',
				}
			]},
			]
		}
		/*{
			title: 'Instruction',
			name: 'instruction',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							title: 'Instruction Text',
							name: 'instructionText',
							type: 'text',
						},
						{
							title: 'Instruction Image',
							name: 'nnstructionImage',
							type: 'image',
							fields: [
								{ 
								  name: 'alt',
								  type: 'string',
								  validation: rule => rule.required()
								}
							 ]
						}
					]
				}
			]
		}*/

	]
}