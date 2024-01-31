import type { Order, OrderPreview } from '~/types/order'

const useOrdersStore = defineStore('orders', () => {
  const notifier = useNotifier()
  const user = useSupabaseUser()

  const items = useLocalStorage<OrderPreview[]>('orders', [])

  const isInitialized = ref(false)
  const isOrdersFetching = ref(false)
  const initialize = async () => {
    try {
      isOrdersFetching.value = true
      const orders = await $fetch('/api/user/orders')
      items.value = orders
      isInitialized.value = true
    } finally {
      isOrdersFetching.value = false
    }
  }

  const createOrder = async (
    orderFields: Pick<Order, 'address' | 'paymentMethod'>,
    cartItemsIds: string[],
  ) => {
    try {
      const order = await $fetch('/api/user/orders', {
        method: 'POST',
        body: { ...orderFields, cartItemsIds },
      })
      console.log(order)
    } catch (err) {
      throw err
    }
  }

  return {
    items,
    isInitialized,
    isOrdersFetching,
    initialize,
    createOrder,
  }
})

export const useOrders = () => {
  const user = useSupabaseUser()

  const ordersStore = useOrdersStore()
  if (
    user.value &&
    !ordersStore.isInitialized &&
    !ordersStore.isOrdersFetching &&
    process.client
  ) {
    ordersStore.initialize()
  }
  return ordersStore
}
