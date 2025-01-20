/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Ajoute toutes les extensions nécessaires
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#e86a92',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc914',
    },
    extend: {},
  },
  plugins: [],
}

