import { PrismaClient } from '@prisma/client'
import { cartItemSelect } from '~/prisma/utils/cartItem'
import authOnly from '~/server/utils/guards/authOnly'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  authOnly(event)

  const { id: productId } = event.context.params
  const { quantity } = await readBody(event)
  const { id: userId } = event.context.user
  return prisma.cartItem.upsert({
    where: { userId_productId: { productId, userId } },
    update: {
      quantity,
    },
    create: {
      userId,
      quantity,
      product: { connect: { id: productId } },
    },
    select: cartItemSelect,
  })
})
