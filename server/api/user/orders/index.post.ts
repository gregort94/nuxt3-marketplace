import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  authOnly(event)

  const { id: userId } = event.context.user
  const { address, paymentMethod } = await readBody(event)

  return prisma.order.create({ data: { paymentMethod, address, userId } })
})
