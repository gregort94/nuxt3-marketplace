import type { Product } from '@prisma/client'
import type { ProductPreview } from '~/types/product'

export const formatProductToProductPreview = (
  product: Product,
): ProductPreview => ({
  id: product.id,
  imageUrl: product.imageUrl,
  name: product.name,
  price: product.price,
  rating: product.rating,
})
