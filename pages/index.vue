<script lang="ts" setup>
import { ProductColor } from '../enums'
import { ApiProduct, ProductFilters } from 'models'
const {
  data: products,
  pending,
  execute,
} = await useLazyFetch<ApiProduct[]>('/api/products')

const filters = ref<ProductFilters>({ colors: [ProductColor.Black] })
const { query } = useRoute()
const router = useRouter()
console.log(query)
watch(filters, (value) => {
  execute()
})
</script>

<template>
  <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
  <div class="bg-white">
    <div>
      <!--
      Mobile filter dialog

      Off-canvas filters for mobile, show/hide based on off-canvas filters state.
    -->
      <div
        class="relative z-40 lg:hidden"
        role="dialog"
        aria-modal="true"
      >
        <!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </div>

      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24"
        >
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">
            New Arrivals
          </h1>

          <div class="flex items-center">
            <div class="relative inline-block text-left">
              <div>
                <button
                  id="menu-button"
                  type="button"
                  class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Sort
                  <svg
                    class="-mr-1 ml-1 h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
              <div
                class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div
                  class="py-1"
                  role="none"
                >
                  <!--
                  Active: "bg-gray-100", Not Active: ""

                  Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
                -->
                  <a
                    id="menu-item-0"
                    href="#"
                    class="block px-4 py-2 text-sm font-medium text-gray-900"
                    role="menuitem"
                    tabindex="-1"
                    >Most Popular</a
                  >
                  <a
                    id="menu-item-1"
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-500"
                    role="menuitem"
                    tabindex="-1"
                    >Best Rating</a
                  >
                  <a
                    id="menu-item-2"
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-500"
                    role="menuitem"
                    tabindex="-1"
                    >Newest</a
                  >
                  <a
                    id="menu-item-3"
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-500"
                    role="menuitem"
                    tabindex="-1"
                    >Price: Low to High</a
                  >
                  <a
                    id="menu-item-4"
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-500"
                    role="menuitem"
                    tabindex="-1"
                    >Price: High to Low</a
                  >
                </div>
              </div>
            </div>

            <button
              type="button"
              class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
            >
              <span class="sr-only">View grid</span>
              <svg
                class="h-5 w-5"
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button
              type="button"
              class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            >
              <span class="sr-only">Filters</span>
              <svg
                class="h-5 w-5"
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <section
          aria-labelledby="products-heading"
          class="pb-24 pt-6"
        >
          <h2
            id="products-heading"
            class="sr-only"
          >
            Products
          </h2>

          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <!-- Filters -->
            <ProductsFilter v-model="filters"></ProductsFilter>

            <!-- Product grid -->
            <div class="lg:col-span-3">
              <ProductsList
                :is-loading="pending"
                :products="products"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
1
