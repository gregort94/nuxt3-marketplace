<script lang="ts" setup>
const cart = useCart()
</script>

<template>
  <div>
    <div
      v-if="Object.keys(cart.items).length"
      class="divide-y divide-gray-200 border-y border-gray-200"
    >
      <div
        v-for="item in cart.items"
        :key="item.product.id"
        class="py-4"
      >
        <VSkeleton :loading="cart.isCartFetching">
          <CartItem
            editable
            :cart-item="item"
          ></CartItem>
        </VSkeleton>
      </div>
    </div>
    <div v-else>Cart is empty</div>
  </div>
</template>
