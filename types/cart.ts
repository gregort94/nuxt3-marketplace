import type { CartItem } from '@prisma/client'
import type { ProductPreview } from '~/types/product'

export type CartItemWithProduct = Pick<CartItem, 'id' | 'quantity'> & {
  product: ProductPreview
}
