<script lang="ts" setup>
const modelValue = defineModel<string>()
</script>

<template>
  <UInput v-model="modelValue" />
</template>
