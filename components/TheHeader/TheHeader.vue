<script setup>
const user = useSupabaseUser()
</script>

<template>
  <header>
    <div class="container">
      <div
        class="flex h-defaultLayoutHeaderHeight items-center justify-between border-b dark:border-gray-800"
      >
        <div class="flex justify-center">
          <TheHeaderPageLink path="/">Home</TheHeaderPageLink>
          <TheHeaderPageLink path="/products">Products</TheHeaderPageLink>
        </div>
        <div class="ml-auto flex items-center">
          <ClientOnly>
            <UserPreview v-if="user" />
            <div
              v-else
              class="flex"
            >
              <TheHeaderPageLink path="/login">Log In</TheHeaderPageLink>
              <UDivider orientation="vertical" />
              <TheHeaderPageLink path="/signUp">Sign Up</TheHeaderPageLink>
            </div>
          </ClientOnly>
          <div class="flex items-center">
            <NavigationButtonOrders />
            <NavigationButtonCart />
          </div>
          <div class="ml-2 flex">
            <DarkModeToggle />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
