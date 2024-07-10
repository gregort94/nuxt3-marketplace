// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    assets: '/<rootDir>/assets',
  },
  modules: [
    '@nuxt/ui',
    'nuxt-headlessui',
    '@nuxtjs/supabase',
    '@vee-validate/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxt/eslint',
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
  build: { transpile: ['@vee-validate/rules'] },
  tailwindcss: {
    viewer: false,
  },
})
