<script lang="ts" setup>
import { PRODUCT_SORTS, DEFAULT_PRODUCT_SORT } from '~/constants/sorts'
import type { ProductSort } from '~/types/product'

const modelValue = defineModel<ProductSort>({ default: DEFAULT_PRODUCT_SORT })

const options = Object.entries(PRODUCT_SORTS).map(([value, label]) => ({
  value,
  label,
}))
</script>

<template>
  <USelect
    v-model="modelValue"
    :options="options"
  />
</template>
