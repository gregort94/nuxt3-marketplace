<script lang="ts" setup>
import { ApiProduct } from '../../../models'
interface Props {
  product: ApiProduct
}
const props = defineProps<Props>()
</script>

<template>
  <a
    href="#"
    class="group"
  >
    <div
      class="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200"
    >
      <img
        :src="product.productImage"
        :alt="product.productName"
        class="h-full w-full object-cover object-center group-hover:opacity-75"
      />
    </div>
    <h3 class="mt-4 text-sm text-gray-700">{{ product.productName }}</h3>
    <p class="mt-1 text-lg font-medium text-gray-900">
      ${{ product.productPrice }}
    </p>
  </a>
</template>
