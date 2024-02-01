<script setup>
const user = useSupabaseUser()
</script>

<template>
  <header>
    <div class="container">
      <div class="border-b border-gray-200">
        <div class="flex h-16 items-center justify-center">
          <!-- Logo -->
          <div class="ml-4 flex lg:ml-0">
            <NuxtLink to="/">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </NuxtLink>
          </div>

          <div class="flex h-full grow justify-center">
            <AppHeaderPageLink path="/"> Home </AppHeaderPageLink>
            <AppHeaderPageLink path="/products"> Products </AppHeaderPageLink>
          </div>
          <!-- Flyout menus -->
          <div class="ml-auto flex h-full items-center">
            <ProfileBadge v-if="user"></ProfileBadge>
            <div
              v-else
              class="flex h-full items-center"
            >
              <AppHeaderPageLink path="/login"> Log In </AppHeaderPageLink>
              <span
                class="h-6 w-px bg-gray-200"
                aria-hidden="true"
              />
              <AppHeaderPageLink path="/signUp"> Sign Up </AppHeaderPageLink>
            </div>

            <!-- Cart -->
            <div class="ml-4 flex">
              <NavigationButtonOrders></NavigationButtonOrders>
              <NavigationButtonCart></NavigationButtonCart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
