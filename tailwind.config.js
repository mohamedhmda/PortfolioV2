/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
      '2xl': '2560px',
    },
    extend: {
      colors: {
        'theme-1': '#040F0F',
        'theme-2': '#248232',
        'theme-3': '#2D3A3A',
        'theme-4': '#9EE6B0',
        'theme-5': '#FCFFFC',
      },
    },
  },
  plugins: [],
}
