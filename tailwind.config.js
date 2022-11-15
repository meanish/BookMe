/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#003580",
        brown: {
          400: "#fefbdd",
          100: "rgba(198, 198, 198,0.5)",
        },
        lightb: "#E6F4F1",
        pinki: "#FFEACD",
        back: "#E8CBEF",
        fb: "#43609C",
        insta: "rgb(228, 64, 95)",
        twitt: "#00acee",
        pinte: "	#E60023",
      },
      fontFamily: {
        Rampart: ['"PT Sans"', "sans-serif"],
        Anton: ['"Anton"', "sans-serif"],
        Marker: ["Permanent Marker", "cursive"],
        Right: ["Righteous", "cursive"],
      },
    },
  },
  plugins: [],
}
