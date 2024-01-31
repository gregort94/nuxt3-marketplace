import { PrismaClient } from '@prisma/client'
import authOnly from '~/server/utils/guards/authOnly'

const prisma = new PrismaClient()

export default defineEventHandler((event) => {
  authOnly(event)

  const { id: productId } = event.context.params
  const { id: userId } = event.context.user

  return prisma.cartItem.delete({
    where: { userId_productId: { productId, userId } },
  })
})
