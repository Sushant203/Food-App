const plugin = require("tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-link": "#ddd6cb",
        "gradient-start": "#ff8a05",
        "gradient-end": "#f9b331",
      },
      backgroundImage: {
        "gradient-to-r-custom": "linear-gradient(90deg, #ff8a05, #f9b331)",
      },
      textColor: {
        transparent: "transparent",
      },
      boxShadow: {
        "custom-glow": "0 0 18px rgba(248, 190, 42, 0.8)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".bg-clip-text": {
          "background-clip": "text",
          "-webkit-background-clip": "text",
        },
        ".text-fill-transparent": {
          "-webkit-text-fill-color": "transparent",
        },
        ".gradient-hover": {
          background: "linear-gradient(90deg, #ff8a05, #f9b331)",
          "background-clip": "text",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "text-shadow": "0 0 18px rgba(248, 190, 42, 0.8)",
        },
      });
    }),
  ],
};
