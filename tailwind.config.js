module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
