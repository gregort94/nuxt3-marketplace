import type { Prisma } from '@prisma/client'
import type { SerializeObject } from 'nitropack'
import type { PRODUCT_SORTS } from '~/constants/sorts'
import type {
  productPreviewSelect,
  productSelect,
} from '~/prisma/utils/product'

export type Product = SerializeObject<
  Prisma.ProductGetPayload<{
    select: typeof productSelect
  }>
>

export type ProductPreview = SerializeObject<
  Prisma.ProductGetPayload<{
    select: typeof productPreviewSelect
  }>
>

export type ProductSort = keyof typeof PRODUCT_SORTS

export type ProductFilters = {
  rating?: number
  search?: string
  sort?: ProductSort
  categories?: string[]
  price?: number[]
}
