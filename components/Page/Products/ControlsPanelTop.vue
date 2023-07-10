<script lang="ts" setup>
const productFilters = useProductFilters()

const isModalOpen = ref(false)
</script>

<template>
  <div class="flex">
    <UButton
      color="gray"
      icon="i-heroicons-adjustments-horizontal"
      @click="isModalOpen = !isModalOpen"
    />
    <ProductSortSelect
      v-model="productFilters.sort"
      class="ml-auto"
    />
    <USlideover v-model="isModalOpen">
      <div class="p-4">
        <PageProductsFilterPanel />
      </div>
    </USlideover>
  </div>
</template>
