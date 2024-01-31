import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  authOnly(event)
  const { id: userId } = event.context.user

  return prisma.order.findMany({
    where: { userId },
    select: {
      id: true,
      address: true,
      cartItems: { select: { product: true, id: true, quantity: true } },
    },
  })
})
