import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

const generateProduct = () => ({
  name: faker.commerce.product(),
  price: faker.commerce.price(),
  rating: faker.number.int({ min: 1, max: 5 }),
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
  await prisma.product.createMany({ data: generateProducts(20) })
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
