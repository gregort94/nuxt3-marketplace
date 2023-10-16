import { PrismaClient } from '@prisma/client'
import { ProductFilters } from '~/types/product'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { rating, skip, take } = getQuery<
    ProductFilters & { skip: number; take: number }
  >(event)
  const result = await prisma.product.findMany({
    skip: skip && Number(skip),
    take: take && Number(take),
    where: {
      rating: { gt: rating ? Number(rating) - 1 : undefined },
    },
    orderBy: {
      id: 'asc',
    },
  })
  return result
})
