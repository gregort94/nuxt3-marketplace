<script lang="ts" setup>
import { MAX_PRICE } from '~/constants/general'

const modelValue = defineModel<[number, number]>()
</script>

<template>
  <VRangePicker
    v-model="modelValue"
    :min="0"
    :max="MAX_PRICE"
  />
</template>
