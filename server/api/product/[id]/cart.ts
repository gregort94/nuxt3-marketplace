import { PrismaClient } from '@prisma/client'
import authOnly from '~/server/utils/guards/authOnly'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  assertMethod(event, ['PUT', 'POST', 'PATCH'])

  authOnly(event)

  const { id: productId } = event.context.params
  const { quantity } = await readBody(event)
  const { id: userId } = event.context.user

  return prisma.cartItem.upsert({
    where: { userId_productId: { productId: Number(productId), userId } },
    update: {
      quantity,
    },
    create: {
      userId,
      quantity,
      Product: { connect: { id: Number(productId) } },
    },
  })
})
