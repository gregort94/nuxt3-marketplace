<script lang="ts" setup>
import type { ProductPreview } from '~/types/product'

const props = defineProps<{ product: ProductPreview }>()

const productId = computed(() => props.product.id)

const cart = useCart()

const productQuantity = computed(() => cart.items[productId.value]?.quantity)

const isProductPending = computed(() =>
  cart.pendingProductsIds.has(productId.value),
)

const addToCart = () => cart.addProduct(props.product)

const onReduce = () => {
  if (productQuantity.value === 1) {
    cart.deleteProduct(productId.value)
  } else {
    cart.setQuantity(productId.value, (productQuantity.value as number) - 1)
  }
}
const onIncrease = () =>
  cart.setQuantity(productId.value, (productQuantity.value as number) + 1)
</script>

<template>
  <VSkeleton
    class="min-h-[32px]"
    block-actions
    :loading="cart.isCartFetching || isProductPending"
  >
    <div v-if="!productQuantity && cart.isInitialized">
      <UButton
        block
        @click="addToCart"
        >Add to cart</UButton
      >
    </div>
    <div
      v-if="productQuantity"
      class="flex items-center space-x-2"
    >
      <UButton
        variant="outline"
        :icon="
          productQuantity === 1 ? 'i-heroicons-trash' : 'i-heroicons-minus'
        "
        square
        @click="onReduce"
      />
      <div class="grow text-center">{{ productQuantity }}</div>
      <UButton
        variant="outline"
        icon="i-heroicons-plus"
        square
        @click="onIncrease"
      />
    </div>
  </VSkeleton>
</template>
