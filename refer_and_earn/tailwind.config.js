/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors : {
      lightBlue : 'rgba(var(--color-light-blue), 0.15 )',
      darkBlue : 'rgba(var(--color-dark-blue), 1 )',
      Blue : 'rgba(var(--color-blue), 1 )' ,
      white : 'rgba(var(--color-white), 1 )' ,
      black : 'rgba(var(--color-black), 1 )' ,
      circle1 : 'rgba(var(--color-circle1-blue) , 1)',
      circle2 : 'rgba(var(--color-circle2-blue) , 1)',
      circle3 : 'rgba(var(--color-circle3-blue) , 1)',

    },
    extend: {
      scale: {
        '200': '2',
      }
    },
  },
  plugins: [],
}

