/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				nunito: ['Nunito', 'sans-serif']
			},
			backgroundColor: {
				primary: '#090f1b',
				secondary: '#2E3440'
			},
			colors: {
				primary: '#f0f0f0'
			}
		},
	},
	plugins: [],
}
