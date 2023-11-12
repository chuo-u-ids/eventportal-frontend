// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    'nuxt-vuefire'
  ],
  vuefire: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN || 'chuo-u-eventportal.firebaseapp.com',
      projectId: process.env.FIREBASE_PROJECT_ID || 'chuo-u-eventportal',
    },
    auth: {
      enabled: true,
      sessionCookie: true
    }
  },
})
