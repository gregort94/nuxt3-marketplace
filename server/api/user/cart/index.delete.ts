import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  authOnly(event)

  const { id: userId } = event.context.user

  return prisma.cartItem.deleteMany({
    where: { userId },
  })
})
