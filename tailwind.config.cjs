module.exports = {
	content: ['./src/**/*.svelte'],
	theme: {
		extend: {
			colors: {
				nightowl: {
					light: '#043254',
					DEFAULT: '#011627',
					dark: '01121f'
				},
				iceblue: {
					DEFAULT: '#d6deeb'
				},
				toxicgreen: {
					DEFAULT: '#5fd700'
				},
				turquoise: {
					light: '#83cee6',
					DEFAULT: '#32bfca'
				}
			},
			gridTemplateColumns: {
				'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))'
			}
		}
	},
	plugins: []
};
