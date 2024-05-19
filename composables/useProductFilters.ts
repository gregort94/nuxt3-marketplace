import type { ProductFilters, ProductSort } from '~/types/product'

export default (): ProductFilters => {
  const rating = useCustomRouteQuery('rating', 'number')
  const search = useCustomRouteQuery('search', 'string')
  const sort = useCustomRouteQuery<'string', ProductSort>('sort', 'string')
  const categories = useCustomRouteQuery('categories', 'string', true)
  const priceFrom = useCustomRouteQuery('priceFrom', 'number')
  const priceTo = useCustomRouteQuery('priceTo', 'number')

  return reactive({
    rating,
    search,
    sort,
    categories,
    priceFrom,
    priceTo,
  })
}
