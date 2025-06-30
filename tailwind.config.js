/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#F4D03F',
          400: '#D4AF37',
          500: '#B8860B',
          600: '#9A7B0A'
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F8F8F8',
          200: '#F0F0F0',
          300: '#E8E8E8',
          400: '#C0C0C0',
          500: '#999999',
          600: '#666666',
          700: '#4A4A4A',
          800: '#333333',
          900: '#1A1A1A'
        },
        cream: {
          50: '#FEFEFE',
          100: '#FDFCFC',
          200: '#FAF8F6'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif']
      },
      fontSize: {
        'xs': ['11px', { lineHeight: '16px', letterSpacing: '0.5px' }],
        'sm': ['13px', { lineHeight: '18px', letterSpacing: '0.3px' }],
        'base': ['15px', { lineHeight: '22px', letterSpacing: '0.2px' }],
        'lg': ['17px', { lineHeight: '24px', letterSpacing: '0.1px' }],
        'xl': ['20px', { lineHeight: '28px', letterSpacing: '0px' }],
        '2xl': ['24px', { lineHeight: '32px', letterSpacing: '-0.1px' }],
        '3xl': ['30px', { lineHeight: '38px', letterSpacing: '-0.2px' }],
        '4xl': ['36px', { lineHeight: '44px', letterSpacing: '-0.3px' }],
        '5xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.4px' }],
        '6xl': ['60px', { lineHeight: '68px', letterSpacing: '-0.5px' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      }
    },
  },
  plugins: [],
}