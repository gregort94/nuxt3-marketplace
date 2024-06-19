<script lang="ts" setup>
const { data } = await useCategories()
const fo = ref()
setTimeout(() => {
  fo.value = 2
}, 2000)
</script>

<template>
  <div class="h-[200px] bg-white">
    {{ data }}

    <VSkeleton>
      <span v-if="fo">asds</span>
    </VSkeleton>
  </div>
</template>
