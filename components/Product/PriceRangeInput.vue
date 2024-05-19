<script lang="ts" setup>
const st = defineModel<number>()
const modelValue = defineModel<number>()
</script>

<template>
  <div class="flex items-center space-x-4">
    <UInput></UInput>
    <div>To</div>
    <UInput
      :model-value="modelValue.to"
      @update:model-value="modelValue = { ...modelValue, to: $event }"
    />
  </div>
</template>
