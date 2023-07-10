<script setup>
const user = useSupabaseUser()

const isMobileMenuOpen = ref(false)
</script>

<template>
  <header>
    <div
      class="flex h-defaultLayoutHeaderHeight items-center border-b dark:border-gray-800"
    >
      <div class="container">
        <!-- Desktop -->
        <div class="hidden items-center justify-between sm:flex">
          <div class="flex justify-center">
            <TheHeaderPageLink path="/">Home</TheHeaderPageLink>
            <TheHeaderPageLink path="/products">Products</TheHeaderPageLink>
          </div>
          <div class="ml-auto flex items-center">
            <UserPreview />
            <NavigationButtonCart />
            <div class="ml-2 flex">
              <DarkModeToggle />
              <ThemeSwitcher />
            </div>
          </div>
        </div>
        <!-- Mobile -->
        <div class="flex items-center justify-between sm:hidden">
          <UserPreview />
          <div class="ml-2 flex">
            <NavigationButtonCart />
            <DarkModeToggle />
            <ThemeSwitcher />
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-bars-3"
              @click="isMobileMenuOpen = !isMobileMenuOpen"
            />
          </div>
        </div>
      </div>
    </div>
    <UModal
      v-model="isMobileMenuOpen"
      fullscreen
      :transition="false"
    >
      <div class="container">
        <div
          class="flex h-defaultLayoutHeaderHeight items-center border-b dark:border-gray-800"
        >
          <div class="ml-auto">
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark"
              @click="isMobileMenuOpen = false"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <TheHeaderPageLink
            path="/"
            @click="isMobileMenuOpen = false"
            >Home</TheHeaderPageLink
          >
          <TheHeaderPageLink
            path="/products"
            @click="isMobileMenuOpen = false"
            >Products</TheHeaderPageLink
          >
        </div>
      </div>
    </UModal>
  </header>
</template>
