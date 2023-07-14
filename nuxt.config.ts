// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    assets: '/<rootDir>/assets',
  },
  modules: ['@nuxthq/ui', '@nuxtjs/tailwindcss'],
})
