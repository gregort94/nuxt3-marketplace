<script lang="ts" setup>
import { useRouteQuery } from '@vueuse/router'
const productFilters = useProductFilters()
</script>

<template>
  <div class="space-y-4">
    <FilterPanelItem label="Categories">
      <ProductCategoriesPicker v-model="productFilters.categories" />
    </FilterPanelItem>
    <FilterPanelItem label="Sort">
      <ProductSortSelect v-model="productFilters.sort" />
    </FilterPanelItem>
    <FilterPanelItem label="Search by name">
      <VConfirmField
        v-slot="{ handleChange, value }"
        v-model="productFilters.search"
      >
        <ProductSearchInput
          :model-value="value"
          @update:model-value="handleChange"
        />
      </VConfirmField>
    </FilterPanelItem>
    <UDivider />
    <FilterPanelItem label="Rating">
      <ProductRatingSelect v-model="productFilters.rating" />
    </FilterPanelItem>
    <UDivider />
    <FilterPanelItem label="Price">
      <VConfirmField
        v-slot="{ handleChange, value }"
        :model-value="{
          from: productFilters.priceFrom,
          to: productFilters.priceTo,
        }"
      >
        <ProductPriceRangeInput
          :model-value="value"
          @update:model-value="handleChange"
        />
      </VConfirmField>
    </FilterPanelItem>
  </div>
</template>
