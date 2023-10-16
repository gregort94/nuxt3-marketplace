<script lang="ts" setup>
import { Product } from '@prisma/client'

const props = defineProps<{}>()
useAppConfig()
const filters = useProductFilters()
const {
  data: list,
  pending,
  addItems,
} = await useListFetch<Product>('/api/product/list', {
  query: filters,
})

// const {
//   data: list,
//   pending,
//   execute,
// } = await useLazyFetch('/api/product/list', {
//   query: filters,
// })

const onBottom = async () => {
  const a = await addItems()
}
</script>

<template>
  <InfiniteScrollContainer @trigger="onBottom">
    <div class="relative bg-white">
      <div
        class="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      >
        <div
          v-if="list"
          class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8"
        >
          <NuxtLink
            v-for="product in list"
            :key="product.id"
            :to="`/product/${product.id}`"
            class="group text-sm"
          >
            <div
              class="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75"
            >
              <img
                :src="product.imageUrl"
                class="h-full w-full bg-red-50 object-cover object-center"
              />
            </div>
            <RatingValue :value="product.rating"></RatingValue>
            <h3 class="mt-4 font-medium text-gray-900">{{ product.name }}</h3>
            <p class="mt-2 font-medium text-gray-900">{{ product.price }}</p>
          </NuxtLink>
        </div>
      </div>
      <VOverlayLoading v-if="pending"></VOverlayLoading>
    </div>
  </InfiniteScrollContainer>
</template>
