/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8eaf6',
          100: '#c5cae9',
          500: '#3f51b5',
          700: '#303f9f',
          900: '#1a237e',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}