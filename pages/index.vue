<script lang="ts" setup>
const { data } = await useCategories()
</script>

<template>
  <div class="h-[200px] bg-white">
    {{ data }}
  </div>
</template>
