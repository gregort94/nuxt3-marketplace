<script lang="ts" setup>
const props = defineProps<{
  loading?: boolean
  blockActions?: boolean
}>()
</script>

<template>
  <div
    class="relative min-h-[1em]"
    :class="[{ 'animate-pulse rounded-md': loading }]"
  >
    <slot />
    <div
      v-if="blockActions && loading"
      class="absolute inset-0"
    />
  </div>
</template>
