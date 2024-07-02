<script lang="ts" setup>
defineProps<{ min: number; max: number }>()

const modelValue = defineModel<[number, number]>({
  default: ({ min, max }: { min: number; max: number }) => [min, max],
})

const onSubmit = (value) => {
  modelValue.value = [value.start, value.end]
}
</script>

<template>
  <VeeForm
    v-slot="{ values, handleSubmit }"
    @submit="onSubmit"
  >
    <div class="flex items-center gap-2">
      <VeeField
        v-slot="{ value, handleChange, errorMessage, meta }"
        :value="modelValue[0]"
        :rules="{ required: true, max_value: values.end, min_value: min }"
        name="start"
      >
        <UFormGroup :error="meta.touched && errorMessage">
          <UInput
            type="number"
            :min="min"
            :max="max"
            :model-value="value"
            @blur="handleSubmit($event, onSubmit)"
            @update:model-value="handleChange"
          />
        </UFormGroup>
      </VeeField>
      <div>To</div>
      <VeeField
        v-slot="{ value, handleChange, errorMessage, meta }"
        :value="modelValue[1]"
        :rules="{ required: true, min_value: values.start }"
        name="end"
      >
        <UFormGroup :error="meta.touched && errorMessage">
          <UInput
            type="number"
            :min="min"
            :max="max"
            :model-value="value"
            @blur="handleSubmit($event, onSubmit)"
            @update:model-value="handleChange"
          />
        </UFormGroup>
      </VeeField>
      <input
        type="submit"
        class="hidden"
      />
    </div>
  </VeeForm>
</template>
