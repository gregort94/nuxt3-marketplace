<script lang="ts" setup>
const modelValue = defineModel<string | undefined>()

const onInput = (value: string) => {
  if (!value) {
    modelValue.value = undefined
  } else {
    modelValue.value = value
  }
}
</script>

<template>
  <UInput
    :model-value="modelValue"
    @update:model-value="onInput"
  />
</template>
