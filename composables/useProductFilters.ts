import { useRouteQuery } from '@vueuse/router'
import type { ProductFilters } from '~/types/product'

export default () => {
  const rating = useRouteQuery('rating')
  // return computed<ProductFilters>(() => ({
  //   rating: rating.value as string,
  // }))
  return reactive({
    rating,
  } as const)
}
