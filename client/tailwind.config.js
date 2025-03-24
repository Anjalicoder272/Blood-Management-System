/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blood: '#6A0B37',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
        'sedan': ['Sedan', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateY(-20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        slideIn: "slideIn 1s ease-out",
        bounceSlow: "bounceSlow 2s infinite",
      },
    },
  },
  plugins: [],
};
