<script setup>
import { ref } from 'vue'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="relative bg-white">
    <nav
      aria-label="Top"
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div class="border-b border-gray-200">
        <div class="flex h-16 items-center">
          <button
            type="button"
            class="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
            @click="mobileMenuOpen = true"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open menu</span>
            <Bars3Icon
              class="h-6 w-6"
              aria-hidden="true"
            />
          </button>

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

          <!-- Flyout menus -->

          <div class="ml-auto flex items-center">
            <div
              class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"
            >
              <a
                href="#"
                class="text-sm font-medium text-gray-700 hover:text-gray-800"
                >Sign in</a
              >
              <span
                class="h-6 w-px bg-gray-200"
                aria-hidden="true"
              />
              <a
                href="#"
                class="text-sm font-medium text-gray-700 hover:text-gray-800"
                >Create account</a
              >
            </div>

            <div class="hidden lg:ml-8 lg:flex">
              <a
                href="#"
                class="flex items-center text-gray-700 hover:text-gray-800"
              >
                <img
                  src="https://tailwindui.com/img/flags/flag-canada.svg"
                  alt=""
                  class="block h-auto w-5 shrink-0"
                />
                <span class="ml-3 block text-sm font-medium">CAD</span>
                <span class="sr-only">, change currency</span>
              </a>
            </div>

            <!-- Search -->
            <div class="flex lg:ml-6">
              <a
                href="#"
                class="p-2 text-gray-400 hover:text-gray-500"
              >
                <span class="sr-only">Search</span>
                <MagnifyingGlassIcon
                  class="h-6 w-6"
                  aria-hidden="true"
                />
              </a>
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
    </nav>
  </header>
</template>
