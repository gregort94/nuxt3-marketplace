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
    <template v-if="orders.isOrdersFetching">
      <USkeleton
        v-for="item in 3"
        :key="item"
        class="h-16"
      />
    </template>
    <template v-else>
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
          />
        </div>
      </UCard>
    </template>
    <div v-if="orders.isInitialized && !orders.items.length">
      <span class="text-xl font-semibold">Orders are empty</span>
      <NuxtLink to="/cart">
        <UButton variant="link">Go to Cart</UButton>
      </NuxtLink>
    </div>
  </div>
</template>
