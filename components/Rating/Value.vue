<script lang="ts" setup>
const props = defineProps<{ value: number }>()
</script>

<template>
  <div class="flex items-center space-x-2">
    <div class="text-gray-700">{{ value }}</div>
    <RatingValueStars :value="value" />
  </div>
</template>
