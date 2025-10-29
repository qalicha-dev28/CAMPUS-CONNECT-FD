/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: "#B8FF23",
        dark: "#0D0D0D",
        darklight: "#121212",
        soft: "#1A1A1A",
      }
    },
  },
  plugins: [],
}
