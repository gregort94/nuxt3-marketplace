<script lang="ts" setup>
const props = defineProps<{
  iconName: string
  text: string
  badgeText?: number | false
}>()
</script>

<template>
  <div class="hover:text-primary-500 relative flex flex-col items-center p-3">
    <UIcon
      class="h-5 w-5"
      :name="iconName"
    ></UIcon>
    <div class="text-sm">{{ text }}</div>
    <ClientOnly>
      <div
        v-if="badgeText"
        class="absolute right-0 top-0 inline-flex items-center rounded-md bg-gray-50 p-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
      >
        1
      </div>
    </ClientOnly>
  </div>
</template>
