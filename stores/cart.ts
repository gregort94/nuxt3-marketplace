export const useCart = defineStore('cart', () => {
  const products = ref<{ [id: string]: number }>({})

  const initialized = ref(false)

  const initialize = async () => {
    if (initialized.value) return

    const cartItems = await $fetch('/api/user/cart')
    products.value = Object.fromEntries(
      cartItems.map((cartItem) => [cartItem.productId, cartItem.quantity]),
    )
    initialized.value = true
  }

  const setQuantity = async (productId: number, quantity: number) => {
    if (!products.value) return

    const initialQuantity = products.value[productId]
    products.value[productId] = quantity

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

  return { initialize, products, setQuantity, removeProduct, initialized }
})
