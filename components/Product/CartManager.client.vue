<script lang="ts" setup>
import type { ProductPreview } from '~/types/product'

const props = defineProps<{ product: ProductPreview }>()

const productId = computed(() => props.product.id)

const cart = useCart()

const productQuantity = computed(() => cart.items[productId.value]?.quantity)

const isProductPending = computed(() =>
  cart.pendingProductsIds.has(productId.value),
)

const isPendingAdd = ref(false)
const addToCart = async () => {
  try {
    isPendingAdd.value = true
    await cart.addProduct(props.product)
  } finally {
    isPendingAdd.value = false
  }
}

const isPendingReduce = ref(false)
const onReduce = async () => {
  if (productQuantity.value === 1) {
    try {
      isPendingReduce.value = true
      await cart.deleteProduct(productId.value)
    } finally {
      isPendingReduce.value = false
    }
  } else {
    try {
      isPendingReduce.value = true
      await cart.setQuantity(
        productId.value,
        (productQuantity.value as number) - 1,
      )
    } finally {
      isPendingReduce.value = false
    }
  }
}

const isPendingIncrease = ref(false)
const onIncrease = async () => {
  try {
    isPendingIncrease.value = true
    await cart.setQuantity(
      productId.value,
      (productQuantity.value as number) + 1,
    )
  } finally {
    isPendingIncrease.value = false
  }
}
</script>

<template>
  <div class="min-w-40">
    <USkeleton
      v-if="cart.isCartFetching"
      class="h-8 w-full"
    />
    <template v-else>
      <div v-if="!productQuantity">
        <UButton
          block
          :loading="isPendingAdd"
          @click="addToCart"
          >Add to cart</UButton
        >
      </div>
      <div
        v-else
        class="flex items-center space-x-2"
      >
        <UButton
          variant="outline"
          :disabled="isProductPending"
          :loading="isPendingReduce"
          :icon="
            productQuantity === 1 ? 'i-heroicons-trash' : 'i-heroicons-minus'
          "
          square
          @click="onReduce"
        />
        <div class="grow text-center">{{ productQuantity }}</div>
        <UButton
          :disabled="isProductPending"
          :loading="isPendingIncrease"
          variant="outline"
          icon="i-heroicons-plus"
          square
          @click="onIncrease"
        />
      </div>
    </template>
  </div>
</template>
