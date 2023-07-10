<script lang="ts" setup>
defineProps<{ path: string }>()
</script>

<template>
  <NuxtLink
    :to="path"
    class="hover:text-primary flex px-4 text-sm font-medium"
    active-class="text-primary"
  >
    <slot />
  </NuxtLink>
</template>
