<script lang="ts" setup>
import { useRouteQuery } from '@vueuse/router'
import { PRODUCT_SORTS, DEFAULT_PRODUCT_SORT } from '~/constants/sorts'
import type { ProductSort } from '~/types/product'

const query = useRouteQuery<ProductSort | undefined>('sort')

const options = Object.entries(PRODUCT_SORTS).map(([value, label]) => ({
  value,
  label,
}))
</script>

<template>
  <USelect
    :model-value="query || DEFAULT_PRODUCT_SORT"
    :options="options"
    @update:model-value="query = $event"
  />
</template>
