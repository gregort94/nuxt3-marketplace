import type { Order, OrderItem, Product, Prisma } from '@prisma/client'
import type { orderSelect } from '~/prisma/utils/order'

export type OrderWithItems = Prisma.OrderGetPayload<{
  select: typeof orderSelect
}>

export type OrderToCreate = Omit<ModelToCreate<Order>, 'userId'> & {
  items: Omit<ModelToCreate<OrderItem>, 'orderId'>[]
}
