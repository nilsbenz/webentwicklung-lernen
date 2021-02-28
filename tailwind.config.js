const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors.indigo[600],
          DEFAULT: colors.indigo[700],
          dark: colors.indigo[800],
          contrast: colors.white,
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
