/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C2833",
        secondary: "#2980B9",
        // tertiary: "#",
        // border: "#",
        // background: "#",
        // primary_text: "#",
        // secondary_text: "#",
      }
    },
  },
  plugins: [],
}
