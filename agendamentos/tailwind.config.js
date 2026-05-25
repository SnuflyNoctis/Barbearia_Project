/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Catamaran", "sans-serif"],
      },
      colors: {
        brand: {
          light: "#DBC170",
          DEFAULT: "#B8952E",
          dark: "#846F2E",
        },
        gray: {
          100: "#F5F4F5",
          200: "#B2AFB6",
          300: "#98959D",
          400: "#7A767F",
          500: "#3E3C41",
          600: "#2E2C30",
          700: "#232225",
          800: "#19181B",
          900: "#050505",
        },
      },
      animation: {
        "slide-up": "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in": "fadeIn 0.3s ease-in-out",
        pop: "pop 0.2s ease-out",
      },
      keyframes: {
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pop: {
          "0%": { transform: "scale(0.95)" },
          "50%": { transform: "scale(1.02)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
