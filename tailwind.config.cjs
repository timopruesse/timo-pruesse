module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
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
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
