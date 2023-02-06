/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backgroundImg': "url('assets/background.gif')",
      },
      colors: {
        'default' : '#020207'
      }
    },
  },
  plugins: [],
}
