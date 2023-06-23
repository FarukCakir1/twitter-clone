/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tw-blue': '#1DA1F2',
        'tw-dark': '#14171A',
        'tw-dark-gray': '#657786',
        'tw-light-gray': '#AAB8C2',
        'tw-x-light-gray': '#E1E8ED',
        'tw-xx-light-gray': '#F5F8FA'
      }
    },
  },
  plugins: [],
}

