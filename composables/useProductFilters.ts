import { useRouteQuery } from '@vueuse/router'
import type { ProductFilters } from '~/types/product'

export default () => {
  const rating = useRouteQuery<number | undefined>('rating', undefined, {
    transform: Number,
  })
  const search = useRouteQuery<string | undefined>('search')
  const sort = useRouteQuery<string | undefined>('sort')

  return reactive({
    rating,
    search,
    sort,
  })
}
