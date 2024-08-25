/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [{
    pattern: /.*primary.*/
  }],
  //content: [],
  theme: {
    extend: {
      colors: {
        'primary-border': '#5d4e6d',
        primary: '#4f345a',
      },
    },
  },
  plugins: [],
}
