<script lang="ts" setup>
import type { ProductsListSharedState } from '~/pages/products/index.vue'

const productFilters = useProductFilters()

const productsListSharedState = inject(
  'productsListSharedState',
) as ProductsListSharedState
const {
  list,
  addItems,
  isLoading,
  isAdding,
  isNoItems,
  itemsRemain,
  ITEMS_PER_PAGE,
  resetFilters,
  total,
} = toRefs(productsListSharedState)
</script>

<template>
  <div>
    <div class="space-y-4">
      <PageProductsFilterPanelItem label="Sort">
        <ProductSortSelect v-model="productFilters.sort" />
      </PageProductsFilterPanelItem>
      <PageProductsFilterPanelItem label="Categories">
        <ProductCategoriesPicker v-model="productFilters.categories" />
      </PageProductsFilterPanelItem>
      <PageProductsFilterPanelItem label="Search by name">
        <VConfirmField
          v-slot="{ value, handleChange, submit }"
          v-model="productFilters.search"
        >
          <ProductSearchInput
            :model-value="value"
            @blur="submit"
            @update:model-value="handleChange"
          />
        </VConfirmField>
      </PageProductsFilterPanelItem>
      <UDivider />
      <PageProductsFilterPanelItem label="Rating">
        <ProductRatingSelect v-model="productFilters.rating" />
      </PageProductsFilterPanelItem>
      <UDivider />
      <PageProductsFilterPanelItem label="Price">
        <ProductPriceRangeInput v-model="productFilters.price" />
      </PageProductsFilterPanelItem>
    </div>
    <p
      v-if="list"
      class="mt-4"
    >
      Shown <span class="font-bold">{{ list?.length }}</span> out of
      <span class="font-bold">{{ total }}</span>
    </p>
  </div>
</template>
