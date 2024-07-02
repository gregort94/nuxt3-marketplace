import type { Prisma } from '@prisma/client'
import { productPreviewSelect } from '~/prisma/utils/product'

export const orderSelect = {
  id: true,
  address: true,
  paymentMethod: true,
  createdAt: true,
  orderItems: {
    select: {
      id: true,
      price: true,
      quantity: true,
      product: { select: productPreviewSelect },
    },
  },
} satisfies Prisma.OrderSelect
