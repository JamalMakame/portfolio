/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "white-background": "#F0F0F6",
        "dark-background": "#18191A",
        "white-card-background": "#FFFFFF",
        "dark-card-background": "#242527",
        "yellowClr": "#FFB400",
        "paragraph-font": "#767676",
        "dark-font": "#2B2B2B",
        "availableClr": "#7EB942",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin"), require("flowbite/plugin"),],
  darkMode: 'class',
};
