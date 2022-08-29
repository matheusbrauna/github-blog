/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'cover-img': "url('/assets/bg.png')",
      },
      fontFamily: {
        sans: 'Nunito, sans-serif',
      },
      colors: {
        brand: {
          500: '#3294F8',
        },
        base: {
          50: '#E7EDF4',
          100: '#C4D4E3',
          200: '#AFC2D4',
          300: '#7B96B2',
          400: '#3A536B',
          500: '#1C2F41',
          600: '#112131',
          700: '#0B1B2B',
          800: '#071422',
          900: '#040F1A',
        },
      },
    },
  },
  plugins: [],
}
