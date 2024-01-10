import { PrismaClient } from '@prisma/client'
import authOnly from '~/server/utils/guards/authOnly'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  authOnly(event)
  await wait(4000)
  const { id: userId } = event.context.user

  return await prisma.cartItem.findMany({ where: { userId } })
})
