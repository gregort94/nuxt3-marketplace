<script lang="ts" setup>
const cart = useCart()
const user = useSupabaseUser()
</script>

<template>
  <UCard>
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <div class="font-medium">Total:</div>
        <div>${{ cart.summary.price }}</div>
      </div>
      <UDivider />
      <template v-if="user">
        <OrderCreateForm v-if="cart.isInitialized && !cart.isEmpty" />
      </template>
      <div v-else>
        <p class="flex items-center">
          <UIcon
            class="mr-2"
            name="i-heroicons-exclamation-triangle"
          />
          <span>
            Please
            <NuxtLink to="/login">
              <UButton variant="link">Log In</UButton>
            </NuxtLink>
            to place an order
          </span>
        </p>
      </div>
    </div>
  </UCard>
</template>
