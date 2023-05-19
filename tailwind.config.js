/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "coffee-dark": "#533E2D",
        "coffee-light": "#A27035",
        "brown-light": "#B88B4A",
        tan: "#DDCA7D",
        "primary-bg": "#181818",
        "secondary-bg": "#303030",
        "primary-accent": "#ffbf27",
        "secondary-accent": "#0e9594",
        "primary-text": "#e8eaec",
      },
    },
  },
  plugins: [],
};

