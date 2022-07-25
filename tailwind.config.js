/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["index.html", "**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      keyframes: {
        "scale-display": {
          "0%": { opacity: 0, transform: "scale(0)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        "scale-display-reverse": {
          "0%": { display: "inline-flex", opacity: 1, transform: "scale(1)" },
          "99%": { display: "inline-flex", opacity: 1, transform: "scale(1)" },
          "100%": { display: "none", opacity: 0, transform: "scale(0)" },
        },
      },
      animation: {
        "scale-display": "scale-display .3s ease-in-out",
        "scale-display-reverse": "scale-display-reverse .3s ease-in-out",
      },
      colors: {
        primary: "#f43f5e",
        secondary: "#14b8a6",
        dark: "#0f172a",
        "secondary-dark": "#64748b",
        light: "#e5e7eb",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
