<script lang="ts" setup>
import { UseImage } from '@vueuse/components'
import { Product } from '~/types/product'

const route = useRoute()
const { id } = route.params

const { data: product, pending } = await useLazyFetch<Product>(
  `/api/product/${id}`,
)
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-2">
      <div>
        <div class="aspect-square w-full overflow-hidden rounded-md">
          <VSkeletonImage
            :loading="pending"
            :src="product?.imageUrl"
            class="h-full w-full object-cover"
          ></VSkeletonImage>
        </div>
      </div>
      <div>
        <VSkeleton
          class="text-2xl"
          :loading="pending"
          >{{ product?.name }}</VSkeleton
        >
      </div>
    </div>
  </div>
  <!-- <div
    v-if="product"
    class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
  >
    <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
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
  </div> -->
</template>
