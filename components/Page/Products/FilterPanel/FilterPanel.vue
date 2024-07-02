<script lang="ts" setup>
const productFilters = useProductFilters()
</script>

<template>
  <div class="space-y-4">
    <PageProductsFilterPanelItem label="Categories">
      <ProductCategoriesPicker v-model="productFilters.categories" />
    </PageProductsFilterPanelItem>
    <PageProductsFilterPanelItem label="Sort">
      <ProductSortSelect v-model="productFilters.sort" />
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
</template>
