<script lang="ts" setup>
const props = defineProps<{
  iconName: string
  text: string
  badgeText?: number | string
  active?: boolean
}>()
</script>

<template>
  <UButton
    variant="link"
    :icon="iconName"
    :color="active ? 'primary' : 'gray'"
    >{{ text }}</UButton
  >
</template>
