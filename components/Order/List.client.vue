<script lang="ts" setup>
const orders = useOrders()
</script>

<template>
  <div class="flex flex-col">
    <UCard
      v-for="order in orders.items"
      :key="order.id"
    >
      <template #header>
        <div class="flex justify-between">
          <div>Order #{{ order.id }}</div>
          <div>price</div>
        </div>
      </template>
      <div class="space-y-4">
        <CartItem
          :cart-item="item"
          v-for="item in order.cartItems"
          :key="item"
        ></CartItem>
      </div>
    </UCard>
  </div>
</template>
