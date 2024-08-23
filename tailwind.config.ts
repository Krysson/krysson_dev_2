// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#ff4b4b',
        accent: '#3b82f6',
        background: '#000000'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'] // Consider using a modern sans-serif font like Inter
      }
    }
  },
  plugins: [],
  darkMode: 'class'
};
