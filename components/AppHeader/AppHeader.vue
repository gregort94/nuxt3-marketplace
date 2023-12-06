<script setup>
import { ShoppingBagIcon } from '@heroicons/vue/24/outline'

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
            <div class="ml-4 flow-root lg:ml-6">
              <a
                href="#"
                class="group -m-2 flex items-center p-2"
              >
                <ShoppingBagIcon
                  class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span
                  class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                  >0</span
                >
                <span class="sr-only">items in cart, view bag</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
