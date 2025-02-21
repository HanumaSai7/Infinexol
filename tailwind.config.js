/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      lineHeight: {
        'extra-tight': '1.1',
      },
      maxWidth: {
        'xxs': '16rem',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
    },
  },
  plugins: [],
};