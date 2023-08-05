/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        lb: ["Libre Baskerville", "serif"],
        dancing: ["Dancing Script", "cursive"],
      },
      animation: {
        "fade-in-left": "fadeInLeft 1s ease-in-out",
        "fade-in-right": "fadeInRight 1s ease-in-out",
      },
      keyframes: {
        fadeInLeft: {
          "0%": { transform: "translateX(-50px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        fadeInRight: {
          "0%": { transform: "translateX(50px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
