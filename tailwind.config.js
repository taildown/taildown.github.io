/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  purge: {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    options: {
      safelist: [],
    },
  },  
}

