/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF914D",
          "orange-dark": "#E57A32",
          brown: "#1E1200",
          sand: "#F6F1EB",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', "system-ui", "sans-serif"],
        serif: ["Georgia", '"Iowan Old Style"', '"Palatino Linotype"', "Palatino", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(30, 18, 0, 0.06)",
      },
    },
  },
};
