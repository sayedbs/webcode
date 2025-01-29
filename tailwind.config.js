/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "Arial", "sans-serif"]
      },
      colors: {
        primary: '#0f62fe',
        colorBg: '#f2f4f8'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

