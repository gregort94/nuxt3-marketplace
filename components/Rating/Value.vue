<script lang="ts" setup>
const props = defineProps<{ value: number }>()
</script>

<template>
  <div class="flex items-center space-x-1">
    <div class="text-gray-500">{{ value }}</div>
    <UIcon
      class="text-yellow-500"
      name="i-heroicons-star-solid"
    />
  </div>
</template>
