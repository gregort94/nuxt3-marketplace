export const useCart = defineStore('cart', () => {
  const products = ref<{ [id: string]: number }>({})
  const initialized = ref(false)

  const initialize = async () => {
    const { data } = await useFetch('/api/user/cart', {
      headers: useRequestHeaders(['cookie']),
    })
    const cartItems = data.value
    products.value = Object.fromEntries(
      cartItems.map((cartItem) => [cartItem.productId, cartItem.quantity]),
    )
    initialized.value = true
  }

  initialize()

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

  return { products, setQuantity, removeProduct, initialized }
})
