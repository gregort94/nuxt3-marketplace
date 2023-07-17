<script lang="ts" setup>
import { ApiProduct } from '../../models'
interface Props {
  products?: ApiProduct[]
  isLoading: boolean
}
const props = defineProps<Props>()
</script>

<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Products</h2>
      <div
        v-if="isLoading"
        class="absolute inset-0 flex h-full items-center justify-center"
      >
        <LoadingSpinner></LoadingSpinner>
      </div>
      <div
        v-if="products"
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <ProductsListProduct
          v-for="product in products"
          :key="product.productId"
          :product="product"
        ></ProductsListProduct>
      </div>
    </div>
  </div>
</template>
