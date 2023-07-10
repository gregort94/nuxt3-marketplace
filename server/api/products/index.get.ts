import { PrismaClient } from '@prisma/client'
import type { Prisma } from '@prisma/client'
import { DEFAULT_PRODUCT_SORT } from '~/constants/sorts'
import { productPreviewSelect } from '~/prisma/utils/product'
import type { StringifyQuery } from '~/server/types'
import { getSortByString } from '~/server/utils/getSortByString'
import type { ProductFilters } from '~/types/product'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { rating, skip, take, count, search, sort, categories, price } =
    getQuery<
      StringifyQuery<
        ProductFilters & { skip?: number; take?: number; count?: boolean }
      >
    >(event)

  const order = getSortByString(sort || DEFAULT_PRODUCT_SORT)

  const where: Prisma.ProductWhereInput = {
    rating: { gte: rating && Number(rating) },
    name: {
      contains: search && search.trim().toLowerCase(),
      mode: 'insensitive',
    },
    categories:
      (categories && {
        some: {
          category: {
            name: { in: [categories].flat() },
          },
        },
      }) ||
      undefined,
    price: {
      gt: (price?.[0] && Number(price[0])) || undefined,
      lt: (price?.[1] && Number(price[1])) || undefined,
    },
  }

  let total
  if (count) {
    total = await prisma.product.count({
      where,
    })
  }
  const list = await prisma.product.findMany({
    skip: (skip && Number(skip)) || undefined,
    take: (take && Number(take)) || undefined,
    where,
    select: productPreviewSelect,
    orderBy: { [order.field]: order.order },
  })
  return { list, total }
})
