import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
import { getPercentSteps } from '../utils/ratingSystem'

const prisma = new PrismaClient()

const ratingSystemPercentSteps = getPercentSteps(5)

const generateProduct = () => ({
  name: faker.commerce.product(),
  price: faker.commerce.price(),
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
