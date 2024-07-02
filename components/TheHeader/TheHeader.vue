<script setup>
const user = useSupabaseUser()
</script>

<template>
  <header>
    <div class="container">
      <div
        class="flex h-defaultLayoutHeaderHeight items-center justify-between border-b border-gray-200"
      >
        <div class="flex h-full justify-center">
          <TheHeaderPageLink path="/">Home</TheHeaderPageLink>
          <TheHeaderPageLink path="/products">Products</TheHeaderPageLink>
        </div>
        <div class="ml-auto flex h-full items-center">
          <ClientOnly>
            <UserPreview v-if="user" />
            <div
              v-else
              class="flex h-full items-center"
            >
              <TheHeaderPageLink path="/login">Log In</TheHeaderPageLink>
              <span
                class="h-6 w-px bg-gray-200"
                aria-hidden="true"
              />
              <TheHeaderPageLink path="/signUp">Sign Up</TheHeaderPageLink>
            </div>
          </ClientOnly>
          <div class="flex">
            <NavigationButtonOrders />
            <NavigationButtonCart />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
