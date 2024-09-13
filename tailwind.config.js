/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /.*(primary|secondary|success|danger).*/,
    },
    {
      pattern: /((md|lg):)?(primary|secondary|success|danger).*/,
    },
    'text-left',
    'text-right',
    'md:text-left',
    'md:text-right',
  ],
  //content: [],
  theme: {
    extend: {
      colors: {
        'success-border': '#1f1',
        'success-text': '#fff',
        success: '#191',
        'danger-border': '#f11',
        'danger-text': '#fff',
        danger: '#911',
        'primary-text': '#fff',
        primary: '#412234',
        'primary-border': '#ead7d7',
        'secondary-text': '#fff',
        secondary: '#6d466b',
      },
    },
  },
  plugins: [],
}
