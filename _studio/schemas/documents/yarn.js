/**
 * @TODO fix the preview for yarn brand
 */
export default {
	title: 'Yarn',
	name: 'yarn',
	type: 'document',
	fields: [
		{
			title: 'Brand',
			name: 'brand',
			type: 'reference',
			to: {type: 'brand'}
		},
		{
			title: 'Name of yarn',
			name: 'nameOfYarn',
			type: 'string',
		},
		/*{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			validation: rule => rule.required(),
			options: {
				source: 'yarn'
			}
		},*/
		{
			title: 'Color',
			name: 'color',
			type: 'string',
		}
	],
	
	preview: {
		select: {
			brand_name: 'brand',
			yarn_name: 'nameOfYarn',
			yarn_color: 'color',
		},

		prepare: (fields) => {
			return {
				title: `${fields.brand_name}: ${fields.yarn_name}- ${fields.yarn_color}`,
				subtitle: ''
			}
		}
	}
}