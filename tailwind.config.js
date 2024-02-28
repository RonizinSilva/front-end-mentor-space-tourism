/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0B0D17',
        'light-blue': '#D0D6F9',
        'white': '#FFFFFF',
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        'bellefair': ['Bellefair', 'serif'],
      },
      //extend de leading para subheading-2 e nav-text
      lineHeight: {
        'subheading-2': '2.35rem',
        'nav-text': '2.7rem',
      },
    },
  },
  plugins: [],
}

