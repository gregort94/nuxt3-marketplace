import { PrismaClient } from '@prisma/client'
import authOnly from '~/server/utils/guards/authOnly'
import { UserCartPrduct } from '~/types/cart'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  authOnly(event)
  await wait(4000)
  const { id: userId } = event.context.user

  return prisma.cartItem.findMany({
    where: { userId },
    include: {
      Product: {
        select: {
          imageUrl: true,
          price: true,
          name: true,
          id: true,
          rating: true,
        },
      },
    },
  })
})
