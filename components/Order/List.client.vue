<script lang="ts" setup>
const orders = useOrders()
</script>

<template>
  <div>
    <div
      v-for="order in orders.items"
      :key="order.id"
    >
      {{ order.address }}
    </div>
  </div>
</template>
