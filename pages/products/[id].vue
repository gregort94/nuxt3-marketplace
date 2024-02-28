<script lang="ts" setup>
import type { Product } from '~/types/product'

const route = useRoute()
const { id } = route.params

const { data: product, pending } = await useLazyFetch<Product>(
  `/api/products/${id}`,
)
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <div class="aspect-square w-full overflow-hidden rounded-md">
          <VSkeletonImage
            :loading="pending"
            :src="product?.imageUrl"
            class="size-full object-cover"
          />
        </div>
      </div>
      <div class="flex flex-col items-start space-y-1">
        <VSkeleton
          class="text-3xl font-semibold text-gray-900"
          :loading="pending"
          >{{ product?.name }}</VSkeleton
        >
        <VSkeleton
          class="text-3xl text-gray-900"
          :loading="pending"
          >{{ product?.price }}$</VSkeleton
        >
        <VSkeleton :loading="pending">
          <RatingValue
            v-if="product"
            :value="Number(product.rating)"
          />
        </VSkeleton>
        <ProductCartManager
          v-if="product"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>
