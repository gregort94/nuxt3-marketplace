<script lang="ts" setup>
import { UseImage } from '@vueuse/components'
import type { ProductPreview } from '~/types/product'

const resetFilters = () => {
  navigateTo('/products')
}
const filters = useProductFilters()
const ITEMS_PER_PAGE = 20
const {
  list,
  isLoading,
  addItems,
  isAdding,
  itemsRemain,
  isNoItems,
  total,
  itemsLength,
} = useListFetch<ProductPreview>('/api/products', filters, ITEMS_PER_PAGE)

watch(filters, () => {
  window.scrollTo(0, 0)
})

const loadingItemsAmount = computed(() =>
  itemsRemain.value && itemsRemain.value < ITEMS_PER_PAGE
    ? itemsRemain.value
    : ITEMS_PER_PAGE,
)
</script>

<template>
  <InfiniteScrollContainer @trigger="addItems">
    <div
      class="relative grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8"
    >
      <div
        v-for="product in list"
        :key="product.id"
      >
        <NuxtLink :to="`/products/${product.id}`">
          <div
            class="aspect-square w-full overflow-hidden rounded-lg group-hover:opacity-75"
          >
            <UseImage
              class="size-full object-cover"
              :src="product.imageUrl"
            />
          </div>
        </NuxtLink>
        <RatingValue :value="Number(product.rating)" />
        <div>
          <div
            v-for="{ category } in product.categories"
            :key="category.id"
          >
            {{ category.name }}
          </div>
        </div>
        <h3 class="mt-4 line-clamp-1 font-medium text-gray-900">
          {{ product.name }}
        </h3>
        <p class="mt-2 font-medium text-gray-900">{{ product.price }}</p>
        <ProductCartManager
          :product="product"
          @click.stop
        />
      </div>
      <template v-if="isAdding || (isLoading && !list)">
        <USkeleton
          v-for="index in loadingItemsAmount"
          :key="index"
          class="aspect-square"
        />
      </template>

      <VOverlayLoading v-if="isLoading && list" />
      <div
        v-if="isNoItems"
        class="col-span-full text-center"
      >
        No products were found according to these filters
        <UButton @click="resetFilters">Reset Filters</UButton>
      </div>
    </div>
  </InfiniteScrollContainer>
</template>
