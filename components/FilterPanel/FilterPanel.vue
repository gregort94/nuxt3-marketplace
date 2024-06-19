<script lang="ts" setup>
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
        v-slot="{ value, handleChange, submit }"
        v-model="productFilters.search"
      >
        <ProductSearchInput
          :model-value="value"
          @blur="submit"
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
      <ProductPriceRangeInput v-model="productFilters.price" />
    </FilterPanelItem>
  </div>
</template>
