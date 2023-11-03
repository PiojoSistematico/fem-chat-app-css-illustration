/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#d89eff",
        "primary-2": "#9241c8",
        "primary-3": "#6e5d7e",
        "primary-4": "#c6cacd",
        "primary-5": "#3e2753",
        "primary-6": "#a39daa",
        "gradient-1": "#e942ff",
        "gradient-2": "#8838ff",
        "neutral-1": "#ffffff",
        "neutral-2": "#f5f3f7",
        "neutral-3": "#3e2753",
        "neutral-4": "#e570ff",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
