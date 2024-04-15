/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      xs: '450px',
      // => @media (min-width: 450px) { ... }

      sm: '575px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#FFFFFF',
        light: "#f6fbfe",
        black: '#090E34',
        dark: '#1D2144',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        yellow: '#FFCB00',
        'body-color': '#959CB1',
        orange: "#FD7800",
        red: {
          DEFAULT: "#FF3451",
          dark: "#5C0012"
        },
        teal: "#2f9d77",
        green: {
          DEFAULT: "#1DB14B",
          dark: "#00411C"
        },
        blue: {
          light: "#1094c6",
          DEFAULT: "#0077CC",
          dark: "#374491"
        },
        purple: {
          DEFAULT: "#865387",
          dark: "#250024"
        }
      },
      boxShadow: {
        signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
        one: '0px 2px 3px rgba(7, 7, 77, 0.05)',
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
