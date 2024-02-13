<script lang="ts" setup>
const cart = useCart()
</script>

<template>
  <div class="container">
    <div class="grid gap-10 lg:grid-cols-[1fr_400px]">
      <CartItems />
      <CartSummary />
    </div>
  </div>
</template>
