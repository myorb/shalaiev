/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          default: '#4c33fb',
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365'
        },

        // white: {
        //   default: '#fff',
        //   20: 'rgba(255, 255, 255, .2)'
        // },

        black: {
          default: '#2b303a',
          90: 'rgba(0, 0, 0, 0.9)'
        }
      }

      // spacing: {
      //   150: '150%'
      // },

      // borderWidth: {
      //   5: '5px'
      // },

      // boxShadow: {
      //   default: '0 8px 45px rgba(0, 0, 0, 0.3)',
      //   lighter: '0 8px 45px rgba(0, 0, 0, 0.15)'
      // },

      // fontFamily: {
      //   sans: ['Nunito', 'sans-serif']
      // },

      // height: {
      //   '24px': '24px',
      //   '300px': '300px'
      // },

      // inset: {
      //   50: '50%',
      //   100: '100%'
      // },

      // margin: {
      //   '-2px': '-2px'
      // },

      // width: {
      //   '30px': '30px',
      //   '120px': '120px',
      //   '185px': '185px',
      //   '280px': '280px',
      //   '490px': '490px'
      // },

      // maxWidth: {
      //   '3/5': '60%'
      // }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ]
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  }
}
