<script setup lang="ts">
const { cart } = useCart()
</script>

<template>
  <div>
    <NuxtLoadingIndicator></NuxtLoadingIndicator>
    <NuxtLayout>
      <NuxtPage />
      <template #fallback>
        <div>loading</div>
      </template>
    </NuxtLayout>
    <UNotifications />
  </div>
</template>
