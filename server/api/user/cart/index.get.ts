import { PrismaClient } from '@prisma/client'
import { cartItemSelect } from '~/prisma/utils/cartItem'
import authOnly from '~/server/utils/guards/authOnly'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  authOnly(event)

  await wait(4000)

  const { id: userId } = event.context.user

  return prisma.cartItem.findMany({
    where: { userId },
    select: cartItemSelect,
  })
})
