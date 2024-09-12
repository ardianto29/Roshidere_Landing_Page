/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      playfair: ["Playfair Display", "serif"],
    },
    fontSize: {
      sm: "0.44rem",
      tiny: "0.67rem",
      base: "1rem",
      normal: "1.4rem",
      lg: "1.5rem",
      xl: "2.25rem",
      "2xl": "3.38rem",
      "3xl": "5.06rem",
      "4xl": "7.59rem",
      "5xl": "11.39rem",
      "6xl": "17.09rem",
      "7xl": "25.63rem",
    },
    extend: {
      colors: {
        background: "#FAF9F6",
        primary: "#364339",
        secondary: "#4B2E2A",
        "primary--op": "rgba(50, 63, 53, 0.45)",
      },
      spacing: {
        5: ".5rem",
        10: "1rem",
        15: "1.5rem",
        20: "2rem",
        25: "2.5rem",
        30: "3rem",
        60: "6rem",
        90: "9rem",
        120: "12rem",
      },

      screens: {
        // Default breakpoint
        "bp-2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "bp-xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "bp-lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "bp-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "bp-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      backgroundImage: {
        "hero-section": "url('../../public/images/bannerAlya.jpeg')",
      },
    },
  },
  plugins: [],
};
