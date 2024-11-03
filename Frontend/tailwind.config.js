/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-darkvoid': '#151419',
        'custom-liquidlava': '#F56E0F',
        'custom-snow': '#FBFBFB',
      },
    },
  },
  plugins: [],
}
  