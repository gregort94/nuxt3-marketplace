import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  return prisma.order.create({
    data: { address: 'sdf', userId: '04f398b9-60e9-4910-ad22-5911a9feedba' },
  })
})
