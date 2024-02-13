<script lang="ts" setup>
const cart = useCart()
</script>

<template>
  <div>
    <div class="flex flex-col gap-4">
      <div
        v-for="item in cart.items"
        :key="item.product.id"
      >
        <VSkeleton :loading="cart.isCartFetching">
          <CartItem
            editable
            :cart-item="item"
          />
        </VSkeleton>
      </div>

      <template v-if="!Object.keys(cart.items).length && cart.isCartFetching">
        <VSkeleton
          v-for="item in 3"
          :key="item"
          :loading="true"
          class="h-12"
        />
      </template>
    </div>
    <div v-if="cart.isInitialized && !Object.keys(cart.items).length">
      <span class="text-xl font-semibold">Cart is empty</span>
      <NuxtLink to="/products">
        <UButton variant="link">Choose products</UButton>
      </NuxtLink>
    </div>
  </div>
</template>
