<script lang="ts" setup>
const { data, pending } = useFetch('/api/product/list', {
  server: false,
})
console.log(`data: ${!!data.value}`, `pending: ${!!pending.value}`)
// watch(
//   pending,
//   (value) => {
//     console.log(value)
//   },
//   { immediate: true },
// )
</script>

<template>
  <div class="h-[200px] bg-white">
    <VSkeleton>{{ data ? 'products' : '' }}</VSkeleton>
    <div v-if="pending">Pending</div>
  </div>
</template>
