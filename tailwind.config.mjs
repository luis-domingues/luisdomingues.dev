/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'jetbrains': ['JetBrains Mono', 'monospace'],
				'rubik': ['Rubik', 'sans-serif'],
				'sans': ['Rubik', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
