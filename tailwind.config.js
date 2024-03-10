/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        glegoo: ["'Glegoo'"],
        geek: ['"Press Start 2P"'],
        source: ['"Source Code Pro'],
      },
      colors: {
        main: "#F3F5F0",
        sidebar: "#A495E7",
        active: "#8877D4",
      },
    },
  },
  plugins: [],
};
