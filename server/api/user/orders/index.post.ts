import { PrismaClient } from '@prisma/client'
import { orderSelect } from '~/prisma/utils/order'
import type { OrderToCreate } from '~/types/order'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  authOnly(event)

  const { id: userId } = event.context.user
  const { address, paymentMethod, items } = await readBody<OrderToCreate>(event)

  return prisma.order.create({
    data: {
      address,
      paymentMethod,
      userId,
      orderItems: {
        create: items,
      },
    },
    select: orderSelect,
  })
})
