<script lang="ts" setup>
const props = defineProps<{ value: number }>()

const { ratingSystem } = useAppConfig()

const roundedValue = computed(() => Math.round(props.value))
</script>

<template>
  <div class="flex space-x-1">
    <UIcon
      v-for="step in ratingSystem"
      :key="step"
      name="i-heroicons-star-solid"
      :class="[step <= roundedValue ? 'text-yellow-500' : 'text-gray-500']"
    />
  </div>
</template>
