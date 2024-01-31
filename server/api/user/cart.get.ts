import { PrismaClient } from '@prisma/client'
import authOnly from '~/server/utils/guards/authOnly'
import { CartItemWithProduct } from '~/types/cart'

const prisma = new PrismaClient()

export default defineEventHandler(
  async (event): Promise<CartItemWithProduct[]> => {
    authOnly(event)
    // await wait(4000)
    const { id: userId } = event.context.user

    return prisma.cartItem.findMany({
      where: { userId },
      select: {
        product: {
          select: {
            imageUrl: true,
            price: true,
            name: true,
            id: true,
            rating: true,
          },
        },
        id: true,
        quantity: true,
      },
    })
  },
)
