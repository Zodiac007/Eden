/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "theme-color": "#6653e2",
        "title-color": "#1c222e",
        "subtitle-color": "#919aaa",
        "extralight-color": "#e9ecf1",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
