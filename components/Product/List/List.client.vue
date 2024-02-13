<script lang="ts" setup>
import type { ProductPreview } from '~/types/product'

const filters = useProductFilters()
const ITEMS_PER_PAGE = 20
const {
  data: list,
  pending,
  addItems,
  addItemsPending,
  itemsRemain,
} = useListFetch<ProductPreview>(
  '/api/products',
  {
    query: filters,
  },
  ITEMS_PER_PAGE,
)

watch(filters, () => {
  window.scrollTo(0, 0)
})
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
            <VSkeletonImage
              class="size-full object-cover"
              :src="product.imageUrl"
            />
          </div>
        </NuxtLink>
        <RatingValue :value="product.rating" />
        <h3 class="mt-4 line-clamp-1 font-medium text-gray-900">
          {{ product.name }}
        </h3>
        <p class="mt-2 font-medium text-gray-900">{{ product.price }}</p>
        <ProductCartManager
          :product="product"
          @click.stop
        />
      </div>
      <template v-if="addItemsPending || (pending && !list)">
        <USkeleton
          v-for="index in list && itemsRemain < ITEMS_PER_PAGE
            ? itemsRemain
            : ITEMS_PER_PAGE"
          :key="index"
          class="aspect-square"
        />
      </template>

      <VOverlayLoading v-if="pending && list" />
    </div>
  </InfiniteScrollContainer>
</template>
