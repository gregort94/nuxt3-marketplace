<script lang="ts" setup>
import type { CartItemWithProduct } from '~/types/cart'

const props = defineProps<{
  cartItem: CartItemWithProduct
  editable?: boolean
}>()
</script>

<template>
  <div class="flex space-x-4">
    <div class="aspect-square w-24 overflow-hidden rounded-lg">
      <NuxtLink :to="`/products/${cartItem.product.id}`">
        <VSkeletonImage
          class="h-full w-full object-cover"
          :src="cartItem.product.imageUrl"
        ></VSkeletonImage>
      </NuxtLink>
    </div>
    <div class="flex grow justify-between">
      <div>
        <div>{{ cartItem.product.name }}</div>
        <div>${{ cartItem.product.price }}</div>
      </div>
      <ProductCartManager
        v-if="editable"
        :product="cartItem.product"
      ></ProductCartManager>
      <div v-else>{{ cartItem.quantity }}</div>
    </div>
  </div>
</template>
