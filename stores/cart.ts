import { skipHydrate } from 'pinia'
import type { CartItem } from '~/types/cartItem'
import type { ProductPreview } from '~/types/product'

const useCartStore = defineStore('cart', () => {
  const notifier = useNotifier()
  const user = useSupabaseUser()

  const items = useLocalStorage<Record<string, PartialFields<CartItem, 'id'>>>(
    'cartProducts',
    {},
    { deep: true },
  )

  const isEmpty = computed(() => Object.keys(items.value).length === 0)

  const summary = computed(() =>
    Object.values(items.value).reduce(
      (acc, cur) => {
        acc.price += cur.product.price * cur.quantity
        acc.quantity += cur.quantity
        return acc
      },
      { price: 0, quantity: 0 },
    ),
  )

  const isInitialized = ref(false)
  const isCartFetching = ref(false)
  const initialize = async () => {
    if (!user.value) {
      isInitialized.value = true
      return
    }
    try {
      isCartFetching.value = true
      const cartItems = await $fetch('/api/user/cart')
      items.value = Object.fromEntries(
        cartItems.map((cartItem) => [cartItem.product.id, cartItem]),
      )
      isInitialized.value = true
    } finally {
      isCartFetching.value = false
    }
  }

  const pendingProductsIds = ref<Set<string>>(new Set())

  const addProduct = async (product: ProductPreview) => {
    const productId = product.id

    if (!user.value) return (items.value[productId] = { quantity: 1, product })

    try {
      pendingProductsIds.value.add(productId)
      const cartItem = await $fetch(`/api/products/${productId}/cart`, {
        method: 'POST',
        body: { quantity: 1 },
      })
      items.value[product.id] = cartItem
    } catch (err) {
      if (err instanceof Error) notifier.warn(err.message)
    } finally {
      pendingProductsIds.value.delete(productId)
    }
  }

  const setQuantity = async (productId: string, quantity: number) => {
    if (!user.value) return (items.value[productId].quantity = quantity)

    try {
      pendingProductsIds.value.add(productId)
      await $fetch(`/api/products/${productId}/cart`, {
        method: 'POST',
        body: { quantity },
      })
      items.value[productId].quantity = quantity
    } catch (err) {
      if (err instanceof Error) notifier.warn(err.message)
    } finally {
      pendingProductsIds.value.delete(productId)
    }
  }

  const deleteProduct = async (productId: string) => {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    if (!user.value) return delete items.value[productId]
    try {
      pendingProductsIds.value.add(productId)
      await $fetch(`/api/products/${productId}/cart`, {
        method: 'DELETE',
      })
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete items.value[productId]
    } catch (err) {
      if (err instanceof Error) notifier.warn(err.message)
    } finally {
      pendingProductsIds.value.delete(productId)
    }
  }

  const deleteCart = async () => {
    if (!user.value) return clearCart()

    await $fetch('/api/user/cart', { method: 'DELETE' })
    items.value = {}
  }

  const clearCart = () => {
    items.value = {}
  }

  watch(user, (value, oldValue) => {
    if (!oldValue && value) {
      setTimeout(() => {
        initialize()
      }, 0) // Hotfix for supabase authentication
    } else if (oldValue && !value) {
      clearCart()
    }
  })

  return {
    initialize,
    items: skipHydrate(items),
    setQuantity,
    deleteProduct,
    isInitialized,
    isCartFetching,
    isEmpty,
    summary,
    pendingProductsIds,
    addProduct,
    deleteCart,
  }
})

export const useCart = () => {
  const cartStore = useCartStore()
  if (
    !cartStore.isInitialized &&
    !cartStore.isCartFetching &&
    import.meta.client
  ) {
    cartStore.initialize()
  }
  return cartStore
}
