/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'custom-snow': '#FBFBFB',
          'custom-darkvoid': '#151419',
          'custom-liquidlava': '#F56E0F',
        },
      },
    },
    plugins: [],
  } 