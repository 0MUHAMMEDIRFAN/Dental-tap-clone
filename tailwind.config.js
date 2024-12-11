/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'desktop-small': '1200px',
      'tablet-large': '1024px',
      'tablet-small': '640px',
      // 'small-pc':'1200px',
    },
    extend: {},
    fontFamily: {
      // 'Poppins': ['Poppins']
    }
  },
  plugins: [],
}