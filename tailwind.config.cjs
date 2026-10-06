/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,md,ts}'],
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: ["lofi"],
		logs: false,
	}
}
