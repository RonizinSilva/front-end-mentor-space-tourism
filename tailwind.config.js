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
      
     letterSpacing: {
       'heading-5': '4.75px',
       'subheading-2':'2.35px',
       'nav': '2.7px',
     }
      },
      backgroundImage: {
       'home-destop': "url('assets/home/background-home-desktop.jpg')" ,
       'home-tablet': "url('assets/home/background-home-tablet.jpg')",
       'home-mobile': "url('assets/home/background-home-mobile.jpg')",
       'destination-destop': "url('assets/destination/background-destination-desktop.jpg')",
       'destination-tablet': "url('assets/destination/background-destination-tablet.jpg')",
       'destination-mobile': "url('assets/destination/background-destination-mobile.jpg')",
       'crew-destop': "url('assets/crew/background-crew-desktop.jpg')",
       'crew-tablet': "url('assets/crew/background-crew-tablet.jpg')",
       'crew-mobile': "url('assets/crew/background-crew-mobile.jpg')",
       'technology-destop': "url('assets/technology/background-technology-desktop.jpg')",
       'technology-tablet': "url('assets/technology/background-technology-tablet.jpg')",
       'technology-mobile': "url('assets/technology/background-technology-mobile.jpg')",
        
    },
  },
  plugins: [],
}

