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
		{
			title: 'Color',
			name: 'color',
			type: 'string',
		}
	],
	
	preview: {
		select: {
			brand_name: 'brand.yarnBrand',
			field_type: 'reference',
			yarn_name: 'nameOfYarn',
			yarn_color: 'color',
		},

		prepare: (fields) => {
			return {
				title: `${fields.brand_name}: ${fields.yarn_name}, ${fields.yarn_color}`
			}
		}
	}
}