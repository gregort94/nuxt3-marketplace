<script lang="ts" setup>
const props = defineProps<{ productId: number }>()

const cart = useCart()
cart.initialize()

const productQuantity = computed<number>(() => cart.products[props.productId])

const addToCart = () => cart.setQuantity(props.productId, 1)

const onReduce = () => {
  if (productQuantity.value === 1) {
    cart.removeProduct(props.productId)
  } else {
    cart.setQuantity(props.productId, (productQuantity.value as number) - 1)
  }
}
const onIncrease = () =>
  cart.setQuantity(props.productId, (productQuantity.value as number) + 1)
</script>

<template>
  <VSkeleton
    class="min-h-[32px]"
    :loading="cart.isCartFetching"
  >
    <div v-if="!productQuantity && cart.isInitialized">
      <UButton @click="addToCart">Add to cart</UButton>
    </div>
    <div
      v-if="productQuantity"
      class="flex items-center space-x-2"
    >
      <UButton
        icon="i-heroicons-minus"
        square
        @click="onReduce"
      />
      <div>{{ productQuantity }}</div>
      <UButton
        icon="i-heroicons-plus"
        square
        @click="onIncrease"
      />
    </div>
  </VSkeleton>
</template>
