import type { Prisma } from '@prisma/client'
import type { SerializeObject } from 'nitropack'
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

export type ProductFilters = {
  rating?: string
}
