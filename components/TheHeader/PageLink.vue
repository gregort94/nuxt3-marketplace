<script lang="ts" setup>
defineProps<{ path: string }>()
const route = useRoute()
</script>

<template>
  <NuxtLink
    :to="path"
    :class="[
      route.path === path
        ? 'border-primary-600 text-primary-600'
        : 'border-transparent hover:text-gray-800',
    ]"
    class="flex h-full items-center border-b-2 px-4 text-sm font-medium text-gray-700"
  >
    <slot />
  </NuxtLink>
</template>
