<script lang="ts" setup>
import { ref } from 'vue'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/vue/24/outline'
import { Product } from '~/types/product'

const route = useRoute()
const { id } = route.params

const { data: product, pending } = await useLazyFetch<Product>(
  `/api/product/${id}`,
)

console.log(product.value)
</script>

<template>
  <div class="bg-white">
    <div
      v-if="product"
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <!-- Image gallery -->
        <TabGroup
          as="div"
          class="flex flex-col-reverse"
        >
          <!-- Image selector -->
          <div
            class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none"
          >
            <TabList class="grid grid-cols-4 gap-6">
              <Tab
                v-for="image in product.images"
                :key="image.url"
                v-slot="{ selected }"
                class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
              >
                <span class="absolute inset-0 overflow-hidden rounded-md">
                  <img
                    :src="image.url"
                    alt=""
                    class="h-full w-full object-cover object-center"
                  />
                </span>
                <span
                  :class="[
                    selected ? 'ring-indigo-500' : 'ring-transparent',
                    'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                  ]"
                  aria-hidden="true"
                />
              </Tab>
            </TabList>
          </div>

          <TabPanels class="aspect-h-1 aspect-w-1 w-full">
            <TabPanel
              v-for="image in product.images"
              :key="image.url"
            >
              <img
                :src="image.url"
                class="h-full w-full object-cover object-center sm:rounded-lg"
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <!-- Product info -->
        <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">
            {{ product.name }}
          </h1>

          <div class="mt-3">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl tracking-tight text-gray-900">
              {{ product.price }}
            </p>
          </div>

          <form class="mt-6">
            <div class="mt-10 flex">
              <button
                type="submit"
                class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
              >
                Add to bag
              </button>

              <button
                type="button"
                class="ml-4 flex items-center justify-center rounded-md p-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <HeartIcon
                  class="h-6 w-6 shrink-0"
                  aria-hidden="true"
                />
                <span class="sr-only">Add to favorites</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <USkeleton
      v-if="pending"
      class="h-[500px] w-[500px]"
    ></USkeleton>
  </div>
</template>
