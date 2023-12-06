import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { id } = event.context.params

  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
  })
  return product
})
