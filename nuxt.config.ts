// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    assets: '/<rootDir>/assets',
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@nuxtjs/supabase',
    '@vee-validate/nuxt',
  ],
  supabase: {
    redirect: false,
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  colorMode: {
    preference: 'light',
  },
})
