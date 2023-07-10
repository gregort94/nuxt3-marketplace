import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
import {
  memoizeUnique,
  getRandomNumber,
  pickRandomElements,
} from '../utils/general'
import { MAX_PRICE } from '../constants/general'

const prisma = new PrismaClient()

const getUniqProductName = memoizeUnique(faker.commerce.productName)

const generateProduct = () => {
  const name = getUniqProductName()
  const category = name.split(' ')[2]
  return {
    name,
    price: getRandomNumber(100, MAX_PRICE),
    rating: Number((Math.random() * 4 + 1).toFixed(1)),
    imageUrl: faker.image.urlLoremFlickr({ category }),
  }
}

const generateProducts = (length: number) =>
  Array.from({ length }).map(() => generateProduct())

async function seed() {
  const createProducts = async () => {
    await prisma.product.createMany({ data: generateProducts(100) })
    const items = await prisma.product.findMany({ select: { id: true } })
    return items.map((item) => item.id)
  }
  const createCategories = async () => {
    await prisma.category.createMany({
      data: ['shoes', 'clothes', 'accessories'].map((name) => ({ name })),
    })
    const items = await prisma.category.findMany({ select: { id: true } })
    return items.map((item) => item.id)
  }

  const [productsIds, categoriesIds] = await Promise.all([
    createProducts(),
    createCategories(),
  ])

  await prisma.categoriesOnProducts.createMany({
    data: productsIds
      .map((productId) =>
        pickRandomElements(categoriesIds, 1, 3).map((categoryId) => ({
          productId,
          categoryId,
        })),
      )
      .flat(),
  })
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
