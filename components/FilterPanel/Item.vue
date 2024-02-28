<script lang="ts" setup>
const props = defineProps<{ label: string }>()
</script>

<template>
  <!-- <div>
    <div class="block text-sm font-medium text-gray-900">{{ name }}</div>
    <div>
      <slot></slot>
    </div>
  </div> -->
  <UFormGroup :label="label">
    <slot />
  </UFormGroup>
</template>
