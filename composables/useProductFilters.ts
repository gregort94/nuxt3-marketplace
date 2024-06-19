import type { ProductFilters, ProductSort } from '~/types/product'

export default () => {
  const rating = useCustomRouteQuery('rating', 'number')
  const search = useCustomRouteQuery<'string'>('search', 'string')
  const sort = useCustomRouteQuery<'string', ProductSort>('sort', 'string')
  const categories = useCustomRouteQuery('categories', 'string', true)
  const price = useCustomRouteQuery('price', 'number', true) as ComputedRef<
    [number, number] | undefined
  >

  return reactive({
    rating,
    search,
    sort,
    categories,
    price,
  }) satisfies ProductFilters
}
