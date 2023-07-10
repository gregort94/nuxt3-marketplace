<script lang="ts" setup>
import type { ProductPreview } from '~/types/product'

useHead({ title: 'Products' })

const resetFilters = () => {
  navigateTo('/products')
}
const filters = useProductFilters()
const ITEMS_PER_PAGE = 20
const { list, isLoading, addItems, isAdding, itemsRemain, isNoItems, total } =
  useListFetch<ProductPreview>('/api/products', filters, ITEMS_PER_PAGE)

watch(filters, () => {
  window.scrollTo(0, 0)
})

const sharedState = reactive({
  list,
  isLoading,
  addItems,
  isAdding,
  itemsRemain,
  isNoItems,
  ITEMS_PER_PAGE,
  resetFilters,
  total,
})
export type ProductsListSharedState = typeof sharedState
provide('productsListSharedState', sharedState)
</script>

<template>
  <div class="flex flex-col gap-8">
    <!-- Mobile -->
    <div
      class="fixed top-defaultLayoutHeaderHeight z-10 block w-full bg-white/75 py-4 backdrop-blur sm:hidden dark:bg-gray-900/75"
    >
      <div class="container">
        <PageProductsControlsPanelTop />
      </div>
    </div>
    <div class="container">
      <div class="grid gap-8 sm:grid-cols-[200px_1fr]">
        <div class="hidden sm:block">
          <div
            class="sticky top-defaultLayoutContentTopOffset h-[calc(100vh_-_theme(spacing.defaultLayoutContentHeight))]"
          >
            <PageProductsFilterPanel />
          </div>
        </div>
        <PageProductsList />
      </div>
    </div>
  </div>
</template>
