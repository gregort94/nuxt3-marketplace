<script lang="ts" setup>
const props = defineProps<{
  iconName: string
  text: string
  badgeText?: number | string
}>()
</script>

<template>
  <UButton
    variant="link"
    :icon="iconName"
    color="gray"
    >{{ text }}</UButton
  >
</template>
