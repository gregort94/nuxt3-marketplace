export const PRODUCT_SORTS = {
  price_asc: 'Price (ascending)',
  price_desc: 'Price (descending)',
  rating_desc: 'Best Rating',
  createdAt_desc: 'Newest',
} as const

export const DEFAULT_PRODUCT_SORT: keyof typeof PRODUCT_SORTS = 'createdAt_desc'
