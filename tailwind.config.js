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
        main: "#EDF5E1",
      },
    },
  },
  plugins: [],
};
