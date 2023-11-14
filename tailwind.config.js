/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '300px'
      },
      colors: {
        'moderate-cyan': 'hsl(176, 50%, 47%)',
        'dark-cyan': 'hsl(176, 72%, 28%)',
        'dark-grey': 'hsl(0, 0%, 48%)'
      },
      fontFamily: {
        'commissioner': ['Commissioner', 'sans-serif']
      }
    },
  },
  plugins: [],
}

