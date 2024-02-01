<script lang="ts" setup>
const props = defineProps<{
  iconName: string
  text: string
  badgeText?: number | string
}>()
</script>

<template>
  <UChip
    :text="badgeText"
    size="2xl"
    :show="!!badgeText"
  >
    <UButton
      variant="link"
      :icon="iconName"
      color="gray"
      >{{ text }}</UButton
    >
  </UChip>
</template>
