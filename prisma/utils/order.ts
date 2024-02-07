import { Prisma } from '@prisma/client'

export const orderSelect = {
  id: true,
  address: true,
  paymentMethod: true,
  createdAt: true,
  orderItems: { include: { product: true } },
} satisfies Prisma.OrderSelect
