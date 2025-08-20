/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f7',
          100: '#dae6ed',
          200: '#b8d0de',
          300: '#8bb3c7',
          400: '#5a91ab',
          500: '#365a74',
          600: '#2e4d63',
          700: '#274153',
          800: '#243746',
          900: '#22303d',
          950: '#161f28',
        },
        secondary: {
          50: '#f7f5f3',
          100: '#ede8e3',
          200: '#ddd2c8',
          300: '#c7b5a5',
          400: '#b59688',
          500: '#aa8f79',
          600: '#9d7f6a',
          700: '#836959',
          800: '#6b564b',
          900: '#57473e',
          950: '#2e241f',
        },
      },
    },
  },
  plugins: [],
}