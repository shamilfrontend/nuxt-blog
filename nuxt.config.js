const pkg = require('./package');

module.exports = {
  mode: 'universal',

  head: {
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'nuxt, vue, ssr'
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  loading: {color: '#409EFF '},

  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/theme/index.scss',
  ],

  plugins: [
    '@/plugins/globals',
    '@/plugins/axios',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-seo-module', {
      robots: {
        UserAgent: '',
        CrawlDelay: '',
        Disallow: '',
        Allow: '',
        Sitemap: ''
      },
      sitemap: [
        {
          generate: true
        }
      ]
    }],
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
  },

  env: {
    appName: 'NuxtJS SSR and PWA Blog',
    MONGO_URI: 'mongodb://shamilfrontend:shamilfrontend123@ds263856.mlab.com:63856/nuxt-blog',
    JWT: 'dev-jwt-key',
  },

  build: {
    transpile: [/^element-ui/],

    extend(config, ctx) {
    }
  }
};
