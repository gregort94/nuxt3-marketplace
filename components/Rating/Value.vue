<script lang="ts" setup>
defineProps<{ value: number }>()
</script>

<template>
  <div class="flex items-center space-x-1">
    <div>{{ value }}</div>
    <UIcon
      class="text-yellow-500"
      name="i-heroicons-star-solid"
    />
  </div>
</template>
