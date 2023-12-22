/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "576px",
			// => @media (min-width: 576px) { ... }

			md: "960px",
			// => @media (min-width: 960px) { ... }

			lg: "1440px",
			// => @media (min-width: 1440px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1440px",
			// => @media (min-width: 1536px) { ... }
			"3xl": "1512px",
			"4xl": "1728px",
			"5xl": "1920px",
			"6xl": "2560px",
			"7xl": "3840px",
		},
		extend: {},
	},
	plugins: [],
};
