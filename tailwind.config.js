/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#F5F5DC",
        brown: "#8B4513",
        pink: "#F4A7B9",
        green: "#4CAF50",
      },
    },
  },
  plugins: [],
}