/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        myShadow1: '4.1px -5px 0 0 black',
        myShadow2: '-4.1px -5px 0 0 black'
      },
    },
  },
  plugins: [],
}
