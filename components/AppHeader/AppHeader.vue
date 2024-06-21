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
          <AppHeaderPageLink path="/">Home</AppHeaderPageLink>
          <AppHeaderPageLink path="/products">Products</AppHeaderPageLink>
        </div>
        <div class="ml-auto flex h-full items-center">
          <ClientOnly>
            <ProfileBadge v-if="user" />
            <div
              v-else
              class="flex h-full items-center"
            >
              <AppHeaderPageLink path="/login">Log In</AppHeaderPageLink>
              <span
                class="h-6 w-px bg-gray-200"
                aria-hidden="true"
              />
              <AppHeaderPageLink path="/signUp">Sign Up</AppHeaderPageLink>
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
