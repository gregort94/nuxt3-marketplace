<script lang="ts" setup>
import { ProductColor } from '../../../enums'
interface Props {
  modelValue?: ProductColor[]
}
const colors = ref<ProductColor[]>(ArrayFromEnum(ProductColor))
const props = defineProps<Props>()
const emit = defineEmits<{
  (event: 'update:modelValue', value: ProductColor[]): void
}>()
const onCheckColor = (value, color) => {
  const colorsSet = new Set(props.modelValue || [])
  if (value) {
    colorsSet.add(color)
  } else {
    colorsSet.delete(color)
  }
  emit('update:modelValue', Array.from(colorsSet))
}
</script>

<template>
  <div class="space-y-6">
    <UCheckbox
      v-for="item in colors"
      :key="item"
      :model-value="modelValue?.includes(item)"
      :label="item"
      @update:model-value="onCheckColor($event, item)"
    />
  </div>
</template>
