<script lang="ts" setup>
const cart = useCart()
</script>

<template>
  <NuxtLink to="/cart">
    <ClientOnly>
      <UChip
        :text="cart.summary.quantity"
        :show="cart.isInitialized && !!cart.summary.quantity"
        size="2xl"
      >
        <UButton
          color="gray"
          icon="i-heroicons-shopping-bag"
          variant="link"
          >Cart</UButton
        >
      </UChip>
      <template #fallback>
        <UButton
          color="gray"
          variant="link"
          icon="i-heroicons-shopping-bag"
          >Cart</UButton
        >
      </template>
    </ClientOnly>
  </NuxtLink>
</template>
