<script lang="ts" setup>
const props = defineProps<{ path: string }>()
const route = useRoute()
</script>

<template>
  <NuxtLink
    :key="path"
    :to="path"
    :class="[
      route.fullPath === path
        ? 'border-indigo-600 text-indigo-600'
        : 'border-transparent hover:text-gray-800',
    ]"
    class="flex h-full items-center border-b-2 px-4 text-sm font-medium text-gray-700"
  >
    <slot></slot>
  </NuxtLink>
</template>
