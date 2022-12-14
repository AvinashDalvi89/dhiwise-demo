module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        indigo_300: "#8394c2",
        teal_300: "#62c5a7",
        black_900: "#000000",
        teal_800: "#0d7355",
        bluegray_100: "#d9d9d9",
        red_300: "#db8080",
        black_900_3f: "#0000003f",
        white_A700: "#ffffff",
        teal_100: "#b8ded2",
      },
      fontFamily: { inter: "Inter" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
      borderRadius: { radius815: "81.5px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
