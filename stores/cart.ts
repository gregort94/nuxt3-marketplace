import { skipHydrate } from 'pinia'

export const useCart = defineStore('cart', () => {
  const user = useSupabaseUser()

  const products = useLocalStorage<{ [id: string]: number }>(
    'cartProducts',
    {},
    { deep: true },
  )

  const isInitialized = ref(false)

  const isCartFetching = ref(false)

  const initialize = async () => {
    if (isInitialized.value) return

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

  const setQuantity = async (productId: number, quantity: number) => {
    if (!isInitialized.value) return

    const initialQuantity = products.value[productId]
    products.value[productId] = quantity

    if (!user.value) return

    try {
      await $fetch(`/api/product/${productId}/cart`, {
        method: 'POST',
        body: { quantity },
      })
    } catch (err) {
      products.value[productId] = initialQuantity
    }
  }

  const removeProduct = (productId: number) => {
    delete products.value[productId]
  }

  return {
    initialize,
    products: skipHydrate(products),
    setQuantity,
    removeProduct,
    isInitialized,
    isCartFetching,
  }
})
