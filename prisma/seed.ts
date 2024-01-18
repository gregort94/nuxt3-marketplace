import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
import { getPercentSteps } from '../utils/ratingSystem'

const prisma = new PrismaClient()

const ratingSystemPercentSteps = getPercentSteps(5)

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

const generateProduct = () => ({
  name: getUniqProductName(),
  price: Number(faker.commerce.price()),
  rating:
    ratingSystemPercentSteps[
      Math.floor(Math.random() * ratingSystemPercentSteps.length)
    ],
  imageUrl: faker.image.urlLoremFlickr({ category: 'animal' }),
})

const generateProducts = (length: number) => {
  const products = []
  for (let i = 0; i < length; i++) {
    products.push(generateProduct())
  }
  return products
}

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
