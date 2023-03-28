const disabledCss = {
  'code::before': false,
  'code::after': false,
  'blockquote p:first-of-type::before': false,
  'blockquote p:last-of-type::after': false,
  pre: false,
  code: false,
  'pre code': false,
  'code::before': false,
  'code::after': false,
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            // color: theme('colors.white'),
            color: theme('red.500'),
            ...disabledCss,
          },
        },

        DEFAULT: {
          css: {
            ...disabledCss,
            h1: {
              'font-weight': 'bold',
            },
          },
        },
        sm: { css: disabledCss },
        lg: { css: disabledCss },
        xl: { css: disabledCss },
        '2xl': { css: disabledCss },
      }),
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  variants: {
    typography: ['dark'],
  },
};
