const colors = require('tailwindcss/colors');
const { spacing } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { ...colors.blue },
        secondary: { ...colors.red },
        monochromatic: { ...colors.gray }
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              color: theme('colors.monochromatic.700'),
              a: {
                color: theme('colors.primary.500'),
                '&:hover': {
                  color: theme('colors.primary.700')
                },
                code: { color: theme('colors.primary.400') }
              },
              'h1,h2,h3,h4,h5,h6': { 'scroll-margin-top': spacing[20] },
              thead: {
                borderBottomColor: theme('colors.monochromatic.200')
              },
              code: { color: theme('colors.pink.500') },
              'blockquote p:first-of-type::before': false,
              'blockquote p:last-of-type::after': false
            }
          },
          dark: {
            css: {
              color: theme('colors.monochromatic.200'),
              a: {
                color: theme('colors.primary.400'),
                '&:hover': {
                  color: theme('colors.primary.600')
                },
                code: { color: theme('colors.primary.400') }
              },
              blockquote: {
                borderLeftColor: theme('colors.monochromatic.700'),
                color: theme('colors.monochromatic.300')
              },
              'h1,h2,h3,h4,h5,h6': {
                color: theme('colors.monochromatic.100'),
                'scroll-margin-top': spacing[20]
              },
              hr: { borderColor: theme('colors.monochromatic.700') },
              ol: {
                li: {
                  '&:before': { color: theme('colors.monochromatic.500') }
                }
              },
              ul: {
                li: {
                  '&:before': {
                    backgroundColor: theme('colors.monochromatic.500')
                  }
                }
              },
              strong: { color: theme('colors.monochromatic.100') },
              thead: {
                th: {
                  color: theme('colors.monochromatic.100')
                },
                borderBottomColor: theme('colors.monochromatic.600')
              },
              tbody: {
                tr: {
                  borderBottomColor: theme('colors.monochromatic.700')
                }
              }
            }
          }
        };
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ]
};
