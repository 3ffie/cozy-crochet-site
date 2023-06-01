export default {
	title: 'About Me', 
	name: 'aboutMe', 
	type: 'document', 
	fields: [
		{
			title: 'History', 
			name: 'history', 
			type: 'string'
		}, 
		{
			title: 'Contact e-mail', 
			name: 'contactEmail', 
			type: 'email',
		},
	],

	preview: {
		prepare: () => {
			return {
				title: 'About Me'
			}
		}
	}
}