<script lang="ts" setup>
import { ProductFilters } from '../../models'
interface Props {
  modelValue?: ProductFilters
}
const props = defineProps<Props>()
const emit = defineEmits<{
  (event: 'update:modelValue', value: ProductFilters): void
}>()
</script>

<template>
  <div>
    <ProductsFilterColor
      :model-value="props.modelValue?.colors"
      @update:model-value="
        emit('update:modelValue', { ...props.modelValue, colors: $event })
      "
    ></ProductsFilterColor>
  </div>
</template>
