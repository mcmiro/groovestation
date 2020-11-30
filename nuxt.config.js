const path = require('path');
export default {
  target: 'static',
  // router: {
  //   base: '/groovestation/'
  // },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'groovestation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
      '~/assets/css/style.scss',
      '~/assets/css/tailwind.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-datepicker', ssr: false },      // datepicker plugin here
    { src: '~/plugins/Vuelidate' },                       // Vueldiate plugin goes here
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-purgecss',
    [
      "nuxt-compress",
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    postcss: {
        plugins: { tailwindcss: path.resolve(__dirname, './tailwind.config.js') }
      }
    },
    purgeCSS: {
      mode: 'postcss'
  },
  // server: {
  //   host: "192.168.0.150"
  // }

}
