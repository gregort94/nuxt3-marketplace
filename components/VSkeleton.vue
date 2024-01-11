<script lang="ts" setup>
const props = defineProps<{ loading?: boolean; blockActions?: boolean }>()
</script>

<template>
  <div
    class="relative min-h-[1em]"
    :class="{ 'animate-pulse rounded-md bg-gray-100 ': loading }"
  >
    <slot />
    <div
      v-if="blockActions && loading"
      class="absolute inset-0 opacity-35"
    ></div>
  </div>
</template>
