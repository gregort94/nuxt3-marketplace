import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  authOnly(event)

  const { id: userId } = event.context.user
  const { address, paymentMethod, cartItemsIds } = await readBody(event)
  console.log(address, paymentMethod, cartItemsIds)

  return prisma.order.create({
    data: {
      address,
      paymentMethod,
      userId,
      cartItems: {
        connect: cartItemsIds.map((id: string) => ({
          id,
        })),
      },
    },
  })
})
