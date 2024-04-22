/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#0985CB",
        "primary-light": "#0985CB1A",
        secondary: "#707070",
        tertiary: "#CEB631",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(138deg, rgba(255, 255, 255, 0.4), rgba(128, 128, 128, 0.1))',
      },
      borderColor: {
        'semi-transparent-white': 'rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        '7': '7px',
      },
    },
  },
  plugins: [],
}