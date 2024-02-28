import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
import { MAX_PRICE } from '~/constants/general'

const prisma = new PrismaClient()

const memoizeUnique = <T>(callback: () => T) => {
  const uniqItems = new Set()

  return () => {
    let res
    do {
      res = callback()
    } while (uniqItems.has(res))
    uniqItems.add(res)
    return res
  }
}

const getUniqProductName = memoizeUnique(faker.commerce.productName)

const generateProduct = () => {
  const name = getUniqProductName()
  const category = name.split(' ')[2]
  return {
    name,
    price: Number(faker.commerce.price({ min: 1, max: MAX_PRICE })),
    rating: Number((Math.random() * 4 + 1).toFixed(1)),
    imageUrl: faker.image.urlLoremFlickr({ category }),
  }
}

const generateProducts = (length: number) =>
  Array.from({ length }).map(() => generateProduct())

async function seed() {
  await prisma.product.createMany({ data: generateProducts(100) })
}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
