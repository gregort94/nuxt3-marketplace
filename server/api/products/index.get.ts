import { PrismaClient } from '@prisma/client'
import { productPreviewSelect } from '~/prisma/utils/product'
import { ProductFilters } from '~/types/product'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const {
    rating,
    skip,
    take = 10,
    count,
  } = getQuery<
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
    select: productPreviewSelect,
    orderBy: {
      id: 'asc',
    },
  })
  return { list, total }
})
