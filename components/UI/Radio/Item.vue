<script lang="ts" setup>
const props = defineProps<{ checked?: boolean }>()
</script>

<template>
  <div class="group flex cursor-pointer justify-start space-x-4 py-1">
    <div class="shrink-0">
      <UIRadioCheck
        class="group-hover:border-gray-800"
        :checked="checked"
      ></UIRadioCheck>
    </div>
    <div class="truncate group-hover:text-gray-400">
      <slot></slot>
    </div>
  </div>
</template>
