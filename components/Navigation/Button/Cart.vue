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
        <NavigationButton
          icon-name="i-heroicons-shopping-bag"
          text="Cart"
        ></NavigationButton>
      </UChip>
      <template #fallback>
        <NavigationButton
          icon-name="i-heroicons-shopping-bag"
          text="Cart"
        ></NavigationButton>
      </template>
    </ClientOnly>
  </NuxtLink>
</template>
