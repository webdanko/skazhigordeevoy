/** @type {import('tailwindcss').Config} */

// const defaultTheme = require("tailwindcss/defaultTheme");
// const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extends: {
      fontFamily: {
        'sans': ['"Proxima Nova"'],
        'serif': ['"Proxima Nova"'],
        'mono': ['"Proxima Nova"']
      }
    }
  },
  plugins: [],
};