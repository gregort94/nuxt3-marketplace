<script lang="ts" setup>
const modelValue = defineModel<string>({ required: true })
defineProps<{ colors: string[] }>()
</script>

<template>
  <div class="grid grid-cols-4">
    <UTooltip
      v-for="color in colors"
      :key="color"
      :value="color"
      :text="color"
    >
      <label
        class="cursor-pointer rounded-md p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
        :class="{
          'bg-gray-200 hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-700':
            modelValue === color,
        }"
      >
        <div
          class="size-4 rounded-full"
          :class="`bg-${color}-500`"
        />
        <input
          v-model="modelValue"
          class="absolute h-0 w-0"
          :value="color"
          type="radio"
        />
      </label>
    </UTooltip>
  </div>
</template>
