/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      body: ['MessinaSans', 'sans-serif'],
    },
    fontSize: {
      xs: '10px',
      sm: '17px',
      md: '20px',
      lg: '45px',
      xl: '47px',
      xxl: '144px',
    },
    colors: {
      foreground: {
        300: '#7363574d',
        900: '#736357',
      },
      background: '#f9f5ef',
    },
    extend: {},
  },
  plugins: [],
}
