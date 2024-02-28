import { Prisma, PrismaClient } from '@prisma/client'
import { DEFAULT_PRODUCT_SORT } from '~/constants/sorts'
import { productPreviewSelect } from '~/prisma/utils/product'
import { QueryInput } from '~/server/types'
import { getSortByString } from '~/server/utils/getSortByString'
import { ProductFilters } from '~/types/product'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { rating, skip, take, count, search, sort } =
    getQuery<
      QueryInput<
        ProductFilters & { skip?: number; take?: number; count?: boolean }
      >
    >(event)

  const order = getSortByString(sort || DEFAULT_PRODUCT_SORT)

  const where: Prisma.ProductWhereInput = {
    rating: { gt: rating && Number(rating) - 1 },
    name: {
      contains: search && search.trim().toLowerCase(),
      mode: 'insensitive',
    },
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
    orderBy: { [order.field]: order.order },
  })
  return { list, total }
})
