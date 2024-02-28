import { useRouteQuery } from '@vueuse/router'
import type { ProductFilters } from '~/types/product'

export default () => {
  const rating = useRouteQuery('rating')
  const search = useRouteQuery('search')
  const sort = useRouteQuery('sort')
  // return computed<ProductFilters>(() => ({
  //   rating: rating.value as string,
  // }))
  return reactive({
    rating,
    search,
    sort,
  } as const)
}
