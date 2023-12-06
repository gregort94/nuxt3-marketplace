<script lang="ts" setup>
const props = defineProps<{ loading?: boolean }>()
</script>

<template>
  <div
    class="relative min-h-[1em]"
    :class="{ 'animate-pulse rounded-md bg-gray-100 ': loading }"
  >
    <slot />
  </div>
</template>
