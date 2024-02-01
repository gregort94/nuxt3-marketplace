<script lang="ts" setup>
const cart = useCart()
</script>

<template>
  <NuxtLink to="/cart">
    <NavigationButton
      icon-name="i-heroicons-shopping-bag"
      text="Cart"
      :badge-text="(cart.isInitialized && cart.summary.quantity) || undefined"
    ></NavigationButton>
  </NuxtLink>
</template>
