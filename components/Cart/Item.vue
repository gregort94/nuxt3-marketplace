<script lang="ts" setup>
import type { CartItem } from '~/types/cartItem'

const props = defineProps<{
  cartItem: PartialFields<CartItem, 'id'>
  editable?: boolean
}>()
</script>

<template>
  <div class="flex space-x-4">
    <div class="aspect-square w-24 overflow-hidden rounded-lg">
      <NuxtLink :to="`/products/${cartItem.product.id}`">
        <VSkeletonImage
          class="size-full object-cover"
          :src="cartItem.product.imageUrl"
        />
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
      />
      <div v-else>{{ cartItem.quantity }}</div>
    </div>
  </div>
</template>
~/types/cartItem
