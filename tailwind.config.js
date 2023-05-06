/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/*.html"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#1992d4",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
};
