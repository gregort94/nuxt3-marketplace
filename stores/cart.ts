import { skipHydrate } from 'pinia'
import type { ProductPreview } from '~/types/product'
// import type { UserCartPrduct } from '~/types/cart'

const useCartStore = defineStore('cart', () => {
  const toast = useToast()
  const user = useSupabaseUser()

  const items = useLocalStorage<{
    [id: string]: { quantity: number; product: ProductPreview }
  }>('cartProducts', {}, { deep: true })

  const isInitialized = ref(false)

  const isCartFetching = ref(false)

  const summary = computed(() =>
    Object.entries(items.value).reduce(
      (acc, cur) => {
        acc.price += cur[1].product.price * cur[1].quantity
        acc.quantity += cur[1].quantity
        return acc
      },
      { price: 0, quantity: 0 },
    ),
  )

  const initialize = async () => {
    if (!user.value) {
      isInitialized.value = true
      return
    }

    try {
      isCartFetching.value = true
      const cartItems = await $fetch('/api/user/cart')
      items.value = Object.fromEntries(
        cartItems.map((cartItem) => [
          cartItem.productId,
          { quantity: cartItem.quantity, product: cartItem.Product },
        ]),
      )
      isInitialized.value = true
    } finally {
      isCartFetching.value = false
    }
  }

  const pendingProductsIds = ref<Set<number>>(new Set())

  const addProduct = async (product: ProductPreview) => {
    const productId = product.id

    if (!user) return (items.value[productId] = { quantity: 1, product })

    try {
      pendingProductsIds.value.add(productId)
      await $fetch(`/api/product/${productId}/cart`, {
        method: 'POST',
        body: { quantity: 1 },
      })
      items.value[product.id] = { quantity: 1, product }
    } catch (err: any) {
      toast.add({ title: err.message, color: 'red' })
    } finally {
      pendingProductsIds.value.delete(productId)
    }
  }

  const setQuantity = async (productId: number, quantity: number) => {
    if (!user) return (items.value[productId].quantity = quantity)

    try {
      pendingProductsIds.value.add(productId)
      await $fetch(`/api/product/${productId}/cart`, {
        method: 'POST',
        body: { quantity },
      })
      items.value[productId].quantity = quantity
    } catch (err: any) {
      toast.add({ title: err.message, color: 'red' })
    } finally {
      pendingProductsIds.value.delete(productId)
    }
  }

  const deleteProduct = async (productId: number) => {
    if (!user) return delete items.value[productId]

    try {
      pendingProductsIds.value.add(productId)
      await $fetch(`/api/product/${productId}/cart`, {
        method: 'DELETE',
      })
      delete items.value[productId]
    } catch (err: any) {
      toast.add({ title: err.message, color: 'red' })
    } finally {
      pendingProductsIds.value.delete(productId)
    }
  }

  return {
    initialize,
    items: skipHydrate(items),
    setQuantity,
    deleteProduct,
    isInitialized,
    isCartFetching,
    summary,
    pendingProductsIds,
    addProduct,
  }
})

export const useCart = () => {
  const cart = useCartStore()
  if (!cart.isInitialized && !cart.isCartFetching && process.client) {
    cart.initialize()
  }
  return cart
}
