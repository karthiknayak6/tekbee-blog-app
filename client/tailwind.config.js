/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#FFE3E1",
					200: "#FFD1D1",
					300: "#FF9494",
				},
				secondary: "#FFF5E4",
			},
			fontFamily: {
				body: ["Popins"],
			},
			spacing: {
				100: "30rem",
				98: "26rem",
				101: "99vw",
			},
		},
	},
	plugins: [],
};
