/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#207878',
				dark: '#F0F8F7',
				primaryDarker: '#0f4848',
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.no-scrollbar::-webkit-scrollbar': {
					display: 'none',
				},
				'.no-scrollbar': {
					'-ms-overflow-style': 'none' /* IE and Edge */,
					'scrollbar-width': 'none' /* Firefox */,
				},
				'.content-auto': {
					'content-visibility': 'auto',
				},
				'.content-hidden': {
					'content-visibility': 'hidden',
				},
				'.content-visible': {
					'content-visibility': 'visible',
				},
			})
		}),
	],
}
