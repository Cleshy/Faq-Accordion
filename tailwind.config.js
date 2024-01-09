/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        "light-pink": "hsl(275, 100%, 97%)",
        "grayish-purple": "hsl(292, 16%, 49%)",
        "dark-purple": "hsl(292, 42%, 14%)",
        pink: "#AD28EB",
      },
      fontSize: {
        3.5: "2rem",
      },
      spacing: {
        "1.5xl": "37.5rem",
        7.5: "1.875rem",
      },
    },
  },
  plugins: [],
};
