<script lang="ts" setup>
const cart = useCart()
</script>

<template>
  <NuxtLink to="/cart">
    <UButton
      icon="i-heroicons-shopping-bag"
      square
      variant="ghost"
    >
      <VSkeleton
        class="min-w-4"
        :loading="cart.isCartFetching"
      >
        <ClientOnly>
          <span>{{ cart.totalQuantity }}</span>
        </ClientOnly>
      </VSkeleton>
    </UButton>
  </NuxtLink>
</template>
