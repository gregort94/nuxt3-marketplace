import type { Prisma } from '@prisma/client'
import type { SerializeObject } from 'nitropack'
import type { cartItemSelect } from '~/prisma/utils/cartItem'

export type CartItem = SerializeObject<
  Prisma.CartItemGetPayload<{
    select: typeof cartItemSelect
  }>
>
