<script lang="ts" setup>
const orders = useOrders()

const modifiedOrders = computed(() =>
  orders.items.map((item) => ({
    ...item,
    totalPrice: item.orderItems.reduce(
      (acc, cur) => acc + cur.quantity * cur.price,
      0,
    ),
  })),
)
</script>

<template>
  <div class="flex flex-col gap-8">
    <UCard
      v-for="order in modifiedOrders"
      :key="order.id"
    >
      <template #header>
        <div class="flex justify-between">
          <div>
            Order date: {{ new Date(order.createdAt).toLocaleDateString() }}
          </div>
          <div>Total: ${{ order.totalPrice }}</div>
        </div>
      </template>
      <div class="space-y-4">
        <CartItem
          v-for="item in order.orderItems"
          :key="item.id"
          :cart-item="item"
        ></CartItem>
      </div>
    </UCard>
  </div>
</template>
