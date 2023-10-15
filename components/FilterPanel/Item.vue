<script lang="ts" setup>
const props = defineProps<{ name: string }>()
</script>

<template>
  <div>
    <div class="block text-sm font-medium text-gray-900">{{ name }}</div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
