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
      mobileFooterText: [
        '8px',
        { lineHeight: '18px', letterSpacing: '-0.035em' },
      ],
      mobileSmallText: [
        '10px',
        { lineHeight: '13px', letterSpacing: '-0.035em' },
      ],
      mobileKicker: ['10px', { lineHeight: '18px', letterSpacing: '-0.025em' }],
      mobileLargeBody: [
        '17px',
        { lineHeight: '19px', letterSpacing: '-0.035em' },
      ],
      mobileNavigation: [
        '18px',
        { lineHeight: '20px', letterSpacing: '-0.035em' },
      ],
      mobileH1: ['49px', { lineHeight: '47px', letterSpacing: '-0.065em' }],
      navigation: ['16px', { lineHeight: '18px', letterSpacing: '-0.035em' }],
      kicker: ['20px', { lineHeight: '18px', letterSpacing: '-0.035em' }],
      largeBody: ['45px', { lineHeight: '45px', letterSpacing: '-0.056em' }],
      h1: ['144px', { lineHeight: '138px', letterSpacing: '-0.065em' }],
    },
    colors: {
      foreground: {
        300: '#7363574d',
        900: '#736357',
      },
      background: '#f9f5ef',
    },
    extend: {
      textIndent: {
        h1: '-0.055em',
      },
    },
  },
  plugins: [],
}
