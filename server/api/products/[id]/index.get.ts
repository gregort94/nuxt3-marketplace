import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { id } = event.context.params
  // await wait(3000)
  const product = await prisma.product.findUnique({
    where: { id },
  })

  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found',
    })
  }
  return product
})
