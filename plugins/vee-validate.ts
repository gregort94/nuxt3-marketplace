import { all } from '@vee-validate/rules'
import { defineRule, configure } from 'vee-validate'
import en from '@vee-validate/i18n/dist/locale/en.json'
import { localize } from '@vee-validate/i18n'

export default defineNuxtPlugin(() => {
  Object.keys(all).forEach((rule) => {
    defineRule(rule, all[rule])
  })

  configure({
    generateMessage: localize({
      en,
    }),
  })
})
