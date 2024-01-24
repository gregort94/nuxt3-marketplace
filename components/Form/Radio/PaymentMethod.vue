<script lang="ts" setup>
import type { PaymentMethod } from '@prisma/client'
import { PAYMENT_METHODS } from '@/constants/payment'

const props = defineProps<{
  modelValue: PaymentMethod
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', payload: PaymentMethod): void
}>()

const ICONS: { [key in keyof typeof PAYMENT_METHODS]: string } = {
  CARD: 'i-heroicons-credit-card',
  CASH: 'i-heroicons-banknotes',
}

const options = Object.entries(PAYMENT_METHODS).map(([key, value]) => ({
  label: value,
  value: key,
  icon: ICONS[key as PaymentMethod],
}))
</script>

<template>
  <div class="space-y-1">
    <URadio
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
    >
      <template #label>
        <UIcon :name="option.icon"></UIcon>
        {{ option.label }}
      </template>
    </URadio>
  </div>
</template>
