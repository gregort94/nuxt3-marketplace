import type { Order, OrderItem, Prisma } from '@prisma/client'
import type { SerializeObject } from 'nitropack'

import type { orderSelect } from '~/prisma/utils/order'

export type OrderWithItems = SerializeObject<
  Prisma.OrderGetPayload<{
    select: typeof orderSelect
  }>
>

export type OrderToCreate = Omit<ModelToCreate<Order>, 'userId'> & {
  items: Omit<ModelToCreate<OrderItem>, 'orderId'>[]
}
