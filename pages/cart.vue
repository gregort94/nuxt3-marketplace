<script lang="ts" setup>
const cart = useCart()
</script>

<template>
  <div class="container">
    <div class="grid gap-10 lg:grid-cols-[1fr_400px]">
      <CartItems />

      <div>
        <CartSummary class="sticky top-defaultLayoutContentTopOffset" />
      </div>
    </div>
  </div>
</template>
