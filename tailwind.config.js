/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#f43f5e",
        secondary: "#14b8a6",
        dark: "#0f172a",
        light: "#64748b",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
