module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { skew: { 30: "30deg", "-30": "-30deg" } },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
