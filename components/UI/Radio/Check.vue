<script lang="ts" setup>
const props = withDefaults(
  defineProps<{ checked?: boolean; widthClass?: string }>(),
  {
    widthClass: 'w-4',
  },
)
</script>

<template>
  <div
    class="flex aspect-square items-center justify-center rounded-full border"
    :class="[
      widthClass,
      checked
        ? 'bg-primary-500 border-primary-500'
        : 'border-gray-400 bg-white',
    ]"
  >
    <div class="aspect-square w-1/2 rounded-full bg-white"></div>
  </div>
</template>
