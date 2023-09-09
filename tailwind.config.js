/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-1": "#2e3032",
        white: "#fff",
        "black-button": "#000",
        "color-2": "#8e7ef6",
        lavender: "#eeecfb",
        snow: "#fbfafc",
      },
      spacing: {},
      fontFamily: {
        body: "Poppins",
        "font-awesome-5-brands": "'Font Awesome 5 Brands'",
      },
      borderRadius: {
        "21xl": "40px",
        "80xl": "99px",
        "8xs": "5px",
        "3xs": "10px",
        "15xl-1": "34.1px",
        "2xl-1": "21.1px",
        "33xl-2": "52.2px",
      },
    },
    fontSize: {
      lg: "18px",
      base: "16px",
      "5xl": "24px",
      "6xl": "25px",
      "34xl": "53px",
      sm: "14px",
      "20xl": "39px",
      "12xl": "31px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
