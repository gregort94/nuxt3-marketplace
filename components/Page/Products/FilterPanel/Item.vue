<script lang="ts" setup>
defineProps<{ label: string }>()
</script>

<template>
  <UFormGroup :label="label">
    <slot />
  </UFormGroup>
</template>
