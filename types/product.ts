import { Product as ApiProduct } from '@prisma/client'
export type Product = ApiProduct

export type ProductFilters = {
  rating?: string
}
