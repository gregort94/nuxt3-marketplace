<script lang="ts" setup>
const user = useSupabaseUser()
</script>

<template>
  <div class="container">
    <ClientOnly>
      <OrderList v-if="user" />
      <div
        v-else
        class="flex justify-center"
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
            to see your orders
          </span>
        </p>
      </div>
    </ClientOnly>
  </div>
</template>
