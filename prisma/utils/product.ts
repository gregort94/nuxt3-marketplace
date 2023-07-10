import type { Prisma } from '@prisma/client'

export const productSelect = {
  id: true,
  name: true,
  price: true,
  imageUrl: true,
  rating: true,
  updatedAt: true,
  categories: { select: { category: true } },
} satisfies Prisma.ProductSelect

export const productPreviewSelect = {
  id: true,
  name: true,
  price: true,
  imageUrl: true,
  rating: true,
} satisfies Prisma.ProductSelect
