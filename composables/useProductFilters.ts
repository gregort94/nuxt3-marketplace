import { useRouteQuery } from '@vueuse/router'
import { ProductFilters } from '~/types/product'

export default () => {
  const rating = useRouteQuery('rating')
  return computed<ProductFilters>(() => ({
    rating: rating.value as string,
  }))
}
