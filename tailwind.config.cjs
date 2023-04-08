/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chat_bg_primary: "#f8fefe",
        chat_bg_secondary: "#d7ebf4",
        chat_green: "#005568",
      },
      fontFamily : {
        "inter": ["Inter", "sans-serif"],
      }
    }
  },
  plugins: [],
}
