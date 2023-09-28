<script lang="ts" setup>
const { data: list } = await useLazyFetch('/api/product/list')
</script>

<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div
        v-if="list"
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8"
      >
        <NuxtLink
          v-for="product in list"
          :key="product.id"
          :to="`/product/${product.id}`"
          class="group text-sm"
        >
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75"
          >
            <img
              :src="product.primaryImage.url"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <h3 class="mt-4 font-medium text-gray-900">{{ product.name }}</h3>
          <p class="italic text-gray-500">{{ product.availability }}</p>
          <p class="mt-2 font-medium text-gray-900">{{ product.price }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
