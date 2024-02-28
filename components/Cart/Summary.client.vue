<script lang="ts" setup>
const cart = useCart()
const user = useSupabaseUser()
</script>

<template>
  <UCard>
    <div class="divide-y divide-gray-200">
      <div class="flex items-center justify-between">
        <div class="font-medium text-gray-900">Total:</div>
        <div>${{ cart.summary.price }}</div>
      </div>
      <template v-if="user">
        <OrderCreateForm
          v-if="cart.isInitialized && Object.keys(cart.items).length"
          class="mt-4 pt-4"
        />
      </template>
      <div
        v-else
        class="mt-4 pt-4"
      >
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
