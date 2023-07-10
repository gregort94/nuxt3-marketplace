<script lang="ts" setup generic="T">
const modelValue = defineModel<T>({ required: true })

const tempValue = ref(modelValue.value) as Ref<T>

watch(modelValue, () => {
  tempValue.value = modelValue.value
})

const handleChange = (value: T) => {
  tempValue.value = value
}

const submit = () => {
  modelValue.value = tempValue.value
}
</script>

<template>
  <form @submit.prevent="submit">
    <slot
      :value="tempValue"
      :submit="submit"
      :handle-change="handleChange"
    />
    <input
      type="submit"
      class="hidden"
    />
  </form>
</template>
