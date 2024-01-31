import type { Order as ApiOrder } from '@prisma/client'
import type { CartItemWithProduct } from '~/types/cart'

export type OrderPreview = Pick<
  ApiOrder,
  'id' | 'address' | 'paymentMethod'
> & {
  cartItems: CartItemWithProduct[]
}
