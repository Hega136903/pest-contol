/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#16a34a', // green
        secondary: '#f3f4f6', // gray
        accent: '#ffffff', // white
      },
    },
  },
  plugins: [],
};
