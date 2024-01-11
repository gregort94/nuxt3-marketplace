import { skipHydrate } from 'pinia'

const useCartStore = defineStore('cart', () => {
  const toast = useToast()
  const user = useSupabaseUser()

  const products = useLocalStorage<{ [id: string]: number }>(
    'cartProducts',
    {},
    { deep: true },
  )

  const isInitialized = ref(false)

  const isCartFetching = ref(false)

  const totalQuantity = computed(() =>
    Object.entries(products.value).reduce((acc, cur) => acc + cur[1], 0),
  )

  const initialize = async () => {
    if (!user.value) {
      isInitialized.value = true
      return
    }

    try {
      isCartFetching.value = true
      const cartItems = await $fetch('/api/user/cart')
      products.value = Object.fromEntries(
        cartItems.map((cartItem) => [cartItem.productId, cartItem.quantity]),
      )
      isInitialized.value = true
    } finally {
      isCartFetching.value = false
    }
  }

  const pendingProductsIds = ref<Set<number>>(new Set())

  const setQuantity = async (productId: number, quantity: number) => {
    if (!user) return (products.value[productId] = quantity)

    try {
      pendingProductsIds.value.add(productId)
      await $fetch(`/api/product/${productId}/cart`, {
        method: 'POST',
        body: { quantity },
      })
      products.value[productId] = quantity
    } catch (err: any) {
      toast.add({ title: err.message, color: 'red' })
    } finally {
      pendingProductsIds.value.delete(productId)
    }
  }

  const deleteProduct = async (productId: number) => {
    if (!user) return delete products.value[productId]

    try {
      pendingProductsIds.value.add(productId)
      await $fetch(`/api/product/${productId}/cart`, {
        method: 'DELETE',
      })
      delete products.value[productId]
    } catch (err: any) {
      toast.add({ title: err.message, color: 'red' })
    } finally {
      pendingProductsIds.value.delete(productId)
    }
  }

  return {
    initialize,
    products: skipHydrate(products),
    setQuantity,
    deleteProduct,
    isInitialized,
    isCartFetching,
    totalQuantity,
    pendingProductsIds,
  }
})

export const useCart = () => {
  const cart = useCartStore()
  if (!cart.isInitialized && !cart.isCartFetching && process.client) {
    cart.initialize()
  }
  return cart
}
