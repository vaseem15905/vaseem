/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["var(--font-figtree)"],
      },
      colors: {
      primary: "#D9D9D9",
      seconday: "#1E1E1E",
      accent: "#09DE09",
      accentlight: "#32FF32",
      accentdark: "#07C007",
    },
    },
  },
  plugins: [],
};
