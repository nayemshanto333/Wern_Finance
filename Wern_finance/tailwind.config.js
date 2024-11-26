/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{ center: true},
    extend: {
      colors: {
        praimary: "#772AB3",
        secondary : "#adb2b1",
        forground : "ffffff",
      },
      fontFamily : { mplus1: '"M PLUS 1", sans-serif;'}
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

