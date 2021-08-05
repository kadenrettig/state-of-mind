module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "header-texture": "url('/src/assets/header-pattern.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
