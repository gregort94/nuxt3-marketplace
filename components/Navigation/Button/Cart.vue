<script lang="ts" setup>
const cart = useCart()
</script>

<template>
  <ClientOnly>
    <UChip
      :text="cart.summary.quantity"
      :show="cart.isInitialized && !!cart.summary.quantity"
      size="2xl"
    >
      <UILinkButton
        :button="{ icon: 'i-heroicons-shopping-bag' }"
        to="/cart"
      >
        Cart
      </UILinkButton>
    </UChip>
    <template #fallback>
      <UILinkButton
        :button="{ icon: 'i-heroicons-shopping-bag' }"
        to="/cart"
      >
        Cart
      </UILinkButton>
    </template>
  </ClientOnly>
</template>
