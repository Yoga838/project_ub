module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        primary : "#2E3D51",
        body : "#FFFFFF"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
