module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        oreLight: "#ECF0F0",
        oreDark: "#34485E",
        oreBorder: "#95989A",
      },
      fontFamily: {
        lato: ["'Lato'", "sans-serif"],
        merriweather: ["'Merriweather Sans'", "sans-serif"],
        opensans: ["'Open Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
