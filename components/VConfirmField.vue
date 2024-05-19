<script lang="ts" setup generic="T">
const props = defineProps<{ multipleFields?: boolean }>()
const modelValue = defineModel<T>({ required: true })

const tempValue = ref(modelValue.value)

const handleChange = (value: T) => {
  tempValue.value = value
}

const submit = () => {
  modelValue.value = tempValue.value
}
</script>

<template>
  <form
    class="relative"
    @submit.prevent="submit"
  >
    <slot
      :value="tempValue"
      :handle-change="handleChange"
    />
    <div class="absolute right-0 top-0">
      <UButton @click="submit">Apply</UButton>
    </div>
  </form>
</template>
