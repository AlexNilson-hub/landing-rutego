/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1240px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      sans: ['Gilroy', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url('images-css/top-footer-auto.png')",
        'footer-texture': "url('images-css/top-footer-auto.png')",
      },
      variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active']
      }
      // spacing: {
      //   '128': '32rem',
      //   '144': '36rem',
      // },
    },
  },
  plugins: [],
}

