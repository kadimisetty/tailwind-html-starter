const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
