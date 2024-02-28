<script lang="ts" setup>
const modelStart = ref()
const modelEnd = ref()

const onSubmit = () => {
  console.log(2)
}
</script>

<template>
  <form
    class="flex space-x-2"
    @submit.prevent="onSubmit"
  >
    <UInput v-model="modelStart" />
    <div>To</div>
    <UInput v-model="modelEnd" />
  </form>
</template>
