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
      sm: '16px',
      md: '45px',
      lg: '144px',
    },
    colors: {
      foreground: '#736357',
      background: '#f9f5ef',
    },
    extend: {},
  },
  plugins: [],
}
