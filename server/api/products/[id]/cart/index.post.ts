import { PrismaClient } from '@prisma/client'
import authOnly from '~/server/utils/guards/authOnly'
import { CartItemWithProduct } from '~/types/cart'

const prisma = new PrismaClient()

export default defineEventHandler(
  async (event): Promise<CartItemWithProduct> => {
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
