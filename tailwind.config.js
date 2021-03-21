module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  prefix: '',
  important: false,
  separator: ':',
  darkMode: 'media',
  theme: {
    extend: {
      transformOrigin: {
        0: '0%',
      },
      zIndex: {
        '-1': '-1',
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        primary: '#8AD429',
        shaft: '#373737',
        green: '#8AD429',
        darkgreen: '#02543d',
        snow: '#E5E5E5',
        background: {
          100: '#fff',
        },
      },
    },
    fontFamily: {
      example: ['Example', 'Arial', 'sans-serif'],
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [require('@tailwindcss/forms')],
};
