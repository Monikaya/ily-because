// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Salsa': true,
        download: true,
        inject: true
      }
    }]
  ],
  css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
})
