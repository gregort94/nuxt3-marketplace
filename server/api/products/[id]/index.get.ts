import { PrismaClient } from '@prisma/client'
import { productSelect } from '~/prisma/utils/product'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  // const { id } = event.context.params
  const id = getRouterParam(event, 'id')

  const product = await prisma.product.findUnique({
    where: { id },
    select: productSelect,
  })

  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found',
    })
  }
  return product
})
