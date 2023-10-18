import { PrismaClient } from '@prisma/client'
import { ProductFilters } from '~/types/product'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { rating, skip, take, count } = getQuery<
    ProductFilters & { skip: number; take: number; count?: boolean }
  >(event)
  const where = {
    rating: { gt: rating ? Number(rating) - 1 : undefined },
  }

  let total
  if (count) {
    total = await prisma.product.count({
      where,
    })
  }

  const list = await prisma.product.findMany({
    skip: skip && Number(skip),
    take: take && Number(take),
    where,
    orderBy: {
      id: 'asc',
    },
  })
  return { list, total }
})
