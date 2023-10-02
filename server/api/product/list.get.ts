import { PrismaClient } from '@prisma/client'
console.log(Math.random())
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { skip = 0, take = 20 } = event.context.params
  const result = await prisma.product.findMany({
    skip,
    take,
    where: {
      // title: {
      //   contains: 'Prisma' /* Optional filter */,
      // },
    },
    orderBy: {
      id: 'asc',
    },
  })
  return result
})
