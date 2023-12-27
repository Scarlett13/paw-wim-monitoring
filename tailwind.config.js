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
		extend: {
			keyframes: {
				flicker: {
					"0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
						opacity: "0.99",
						filter:
							"drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))",
					},
					"20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
						opacity: "0.4",
						filter: "none",
					},
				},
				shimmer: {
					"0%": {
						backgroundPosition: "-700px 0",
					},
					"100%": {
						backgroundPosition: "700px 0",
					},
				},
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				flicker: "flicker 3s linear infinite",
				shimmer: "shimmer 1.3s linear infinite",
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [],
};
