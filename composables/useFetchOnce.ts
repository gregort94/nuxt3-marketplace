export default function useFetchOnce<T>(
  ...args: Parameters<typeof useFetch<T>>
) {
  return useFetch<T>(args[0], {
    ...args[1],
    getCachedData(key, nuxtApp) {
      return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    },
  })
}
