import type { OrderToCreate, OrderWithItems } from '~/types/order'

const useOrdersStore = defineStore('orders', () => {
  const notifier = useNotifier()
  const user = useSupabaseUser()
  const cart = useCart()

  const items = useLocalStorage<OrderWithItems[]>('orders', [])

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

  const createOrder = async (orderToCreate: OrderToCreate) => {
    try {
      const newOrder = await $fetch('/api/user/orders', {
        method: 'POST',
        body: orderToCreate,
      })
      items.value.push(newOrder)
      await cart.clearCart()
      navigateTo('/orders')
      notifier.success('Order created')
    } catch (err: any) {
      notifier.warn(err.message)
    }
  }

  const clearOrders = () => {
    items.value = []
    isInitialized.value = false
  }

  watch(user, (value) => {
    if (value) {
      initialize()
    } else {
      clearOrders()
    }
  })

  return {
    items,
    isInitialized,
    isOrdersFetching,
    initialize,
    createOrder,
    clearOrders,
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
