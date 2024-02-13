import type { Prisma } from '@prisma/client'
import { productPreviewSelect } from '~/prisma/utils/product'

export const cartItemSelect = {
  id: true,
  quantity: true,
  product: { select: productPreviewSelect },
} satisfies Prisma.CartItemSelect
