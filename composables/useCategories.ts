import type { Category } from '@prisma/client'

export default () => {
  const nuxtApp = useNuxtApp()
  return useFetch<Category[]>('/api/categories', {
    lazy: true,
    getCachedData: (key) => {
      const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key]
      if (!data) {
        return
      }
      return data
    },
  })
}
