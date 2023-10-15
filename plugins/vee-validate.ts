import * as AllRules from '@vee-validate/rules'
import { defineRule, configure } from 'vee-validate'
import en from '@vee-validate/i18n/dist/locale/en.json'
import { localize } from '@vee-validate/i18n'

export default defineNuxtPlugin(() => {
  Object.keys(AllRules).forEach((rule) => {
    // defineRule(rule, AllRules[rule])
  })

  configure({
    generateMessage: localize({
      en,
    }),
  })
})
