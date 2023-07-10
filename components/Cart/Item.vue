<script lang="ts" setup>
import { UseImage } from '@vueuse/components'
import type { CartItem } from '~/types/cartItem'

defineProps<{
  cartItem: PartialFields<CartItem, 'id'>
  editable?: boolean
}>()
</script>

<template>
  <div class="flex space-x-4">
    <div class="size-24 overflow-hidden rounded-lg">
      <NuxtLink :to="`/products/${cartItem.product.id}`">
        <UseImage
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
