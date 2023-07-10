import type { OrderToCreate, OrderWithItems } from '~/types/order'

const useOrdersStore = defineStore('orders', () => {
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
    const newOrder = await $fetch('/api/user/orders', {
      method: 'POST',
      body: orderToCreate,
    })
    items.value.unshift(newOrder)

    await cart.deleteCart()
  }

  const clearOrders = () => {
    items.value = []
    isInitialized.value = false
  }

  watch(user, (value, oldValue) => {
    if (!oldValue && value) {
      setTimeout(() => {
        initialize() // Hotfix for supabase authentication
      }, 0)
    } else if (oldValue && !value) {
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
    import.meta.client
  ) {
    ordersStore.initialize()
  }
  return ordersStore
}
