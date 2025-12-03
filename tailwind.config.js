



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#780000",   // main dark red
        secondary: "#c1121f", // accent red
        accent: "#fdf0d5",    // light cream
        darkblue: "#003049",  // deep blue
        blue: "#0077b6",      // bright blue
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
