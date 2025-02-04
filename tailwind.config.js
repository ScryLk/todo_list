/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "backgroundBlackColor": "#121212",
        "tittleColor": "#1D1D1D"
      },
      fontFamily: {
        poppins: ["PoppinsRegular"],
        poppinsBold: ["PoppinsBold"],
      }
    },
  },
  plugins: [],
}