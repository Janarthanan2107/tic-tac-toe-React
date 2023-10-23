/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        darkPurple: "#12164b",
        darkBlue: "#2a76b4",
        lightBlue: "#79b9ff",
        white: "#fff",
        lightGray: "#ddd",
      },
      fontFamily: {
        gameFont: ["Seymour One", "sans-serif"],
        speechFont: ["Sofia Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}