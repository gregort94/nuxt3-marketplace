<script lang="ts" setup>
import { UseImage } from '@vueuse/components'
import type { Product } from '~/types/product'

const route = useRoute()
const { id } = route.params

const { data: product, pending } = await useFetchOnce<Product>(
  `/api/products/${id}`,
)
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <div class="aspect-square w-full overflow-hidden rounded-md">
          <UseImage
            :src="product.imageUrl"
            class="size-full object-cover"
          />
        </div>
      </div>
      <div class="flex flex-col items-start space-y-1">
        <div
          class="text-3xl font-semibold text-gray-900"
          :loading="pending"
        >
          {{ product.name }}
        </div>
        <div class="text-3xl text-gray-900">{{ product.price }}$</div>
        <div>
          <RatingValue :value="Number(product.rating)" />
        </div>
        <ProductCartManager :product="product" />
      </div>
    </div>
  </div>
</template>
