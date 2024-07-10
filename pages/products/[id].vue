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
      <div class="flex flex-col justify-between">
        <div class="flex flex-col items-start space-y-1">
          <div class="text-3xl font-semibold">
            {{ product.name }}
          </div>
          <div class="text-3xl">{{ product.price }}$</div>
          <div>
            <RatingValue :value="Number(product.rating)" />
          </div>
          <ProductCartManager :product="product" />
        </div>

        <div class="space-y-2">
          <p>Categories:</p>
          <ul class="flex gap-2">
            <li
              v-for="category in product.categories"
              :key="category.category.id"
              class="rounded-md bg-gray-200 px-2 py-1 dark:bg-gray-700"
            >
              {{ category.category.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
