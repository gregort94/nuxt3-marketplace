import { PrismaClient } from '@prisma/client'
import { ProductFilters } from '~/types/product'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { rating } = getQuery<ProductFilters>(event)
  const { skip = 0, take = 20, filters } = event.context.params
  const result = await prisma.product.findMany({
    skip,
    take,
    where: {
      rating: { gt: rating ? Number(rating) - 1 : undefined },
    },
    orderBy: {
      id: 'asc',
    },
  })
  return result
})
