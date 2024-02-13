import { PrismaClient } from '@prisma/client'
import { orderSelect } from '~/prisma/utils/order'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  authOnly(event)
  const { id: userId } = event.context.user

  return prisma.order.findMany({
    where: { userId },
    select: orderSelect,
    orderBy: { createdAt: 'desc' },
  })
})
