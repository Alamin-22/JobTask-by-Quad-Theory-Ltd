/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: "Ubuntu",
        Roboto: "Roboto",
      },
    },
  },
  plugins: [require("daisyui")],
}