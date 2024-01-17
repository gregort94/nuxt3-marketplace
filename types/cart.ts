import type { CartItem } from '@prisma/client'
import type { ProductPreview } from '~/types/product'

export type UserCartPrduct = Pick<CartItem, 'productId' | 'quantity'> & {
  Product: ProductPreview
}
