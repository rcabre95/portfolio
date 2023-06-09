/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0': { transform: '' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        myBrown: {
          DEFAULT: "#6B3C00"
        },
        myBlue: {
          DEFAULT: "#D9F3FF"
        },
        myGrey: {
          DEFAULT: "#616F83"
        }
      }
    },
  },
  plugins: [],
}
