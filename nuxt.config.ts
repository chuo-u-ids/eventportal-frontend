// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      title: 'C+ iDS Eventportal',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        {
          name: 'description',
          content: 'iDS C+Eventportal'
        },
        // ogp
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'C+ iDS Eventportal'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'C+ iDS Eventportal'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'iDS C+Eventportal'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'hhttps://eventportal2023.chuo.club/ogp.webp'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://eventportal2023.chuo.club'
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        // social
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        { hid: 'twitter:site', name: 'twitter:site', content: '@Chuo_AIandDS' },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@Chuo_AIandDS'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'C+ iDS Eventportal'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'iDS用 C+Eventportal'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://eventportal2023.chuo.club/ogp.webp'
        },
        { hid: 'fb:app_id', property: 'fb:app_id', content: '293812290225032' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Inter:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap',
          rel: 'stylesheet'
        }
      ]
    }
  },
  css: ['normalize.css/normalize.css'],
  modules: ['nuxt-vuefire'],
  vuefire: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain:
        process.env.FIREBASE_AUTH_DOMAIN ||
        'chuo-u-eventportal.firebaseapp.com',
      projectId: process.env.FIREBASE_PROJECT_ID || 'chuo-u-eventportal'
    },
    auth: {
      enabled: true,
      sessionCookie: true
    }
  }
})
