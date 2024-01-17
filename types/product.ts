import type { Product as ApiProduct } from '@prisma/client'
export type Product = ApiProduct

export type ProductPreview = Pick<
  Product,
  'id' | 'name' | 'imageUrl' | 'price' | 'rating'
>

export type ProductFilters = {
  rating?: string
}
