import products from '~/server/productsData'
import { Product } from '~/types/product'

export default defineEventHandler(async (event): Promise<Product> => {
  await wait(5000)
  const { id } = event.context.params
  const apiProduct = products.find((item) => String(item.productId) === id)

  if (!apiProduct) {
    throw createError({
      statusCode: 404,
      message: 'Product not found',
    })
  }

  return {
    id: String(apiProduct.productId),
    name: apiProduct.productName,
    rating: apiProduct.rating,
    price: Number(apiProduct.productPrice),
    images: [{ url: apiProduct.productImage }],
    primaryImage: { url: apiProduct.productImage },
  }
})
