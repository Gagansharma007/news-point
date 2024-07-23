/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  screens: {
    'sm': '576px',

    'md': '960px',

    'lg': '1440px',
  },
  colors: {
    lightBg : "#E2E8F0",
    lightBgPrimary : "#F8FAFC", 
    lightBgSecondary : "#0F172A",
  },
  plugins: [],
}

