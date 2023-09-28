import products from '~/server/productsData'
import { Product } from '~/types/product'

export default defineEventHandler(async (event): Product[] => {
  return products.map((apiProduct) => ({
    id: String(apiProduct.productId),
    name: apiProduct.productName,
    rating: apiProduct.rating,
    price: Number(apiProduct.productPrice),
    images: [{ url: apiProduct.productImage }],
    primaryImage: { url: apiProduct.productImage },
  }))
})
