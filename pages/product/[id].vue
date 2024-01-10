<script lang="ts" setup>
import type { Product } from '~/types/product'
useTest()

const route = useRoute()
const { id } = route.params

const { data: product, pending } = await useLazyFetch<Product>(
  `/api/product/${id}`,
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
            class="h-full w-full object-cover"
          ></VSkeletonImage>
        </div>
      </div>
      <div class="space-y-1">
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
            :value="product.rating"
          ></RatingValue>
        </VSkeleton>
        <ProductCartManager
          v-if="product"
          :product-id="product.id"
        ></ProductCartManager>
      </div>
    </div>
  </div>
</template>
