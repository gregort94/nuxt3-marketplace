<script lang="ts" setup>
const cart = useCart()
</script>

<template>
  <div>
    <div
      v-if="Object.keys(cart.items).length"
      class="divide-y divide-gray-200 border-y border-gray-200"
    >
      <div
        v-for="item in cart.items"
        :key="item.product.id"
        class="py-4"
      >
        <VSkeleton
          :loading="cart.isCartFetching"
          class="flex space-x-4"
        >
          <div class="aspect-square w-24 overflow-hidden rounded-lg">
            <VSkeletonImage
              class="h-full w-full object-cover"
              :src="item.product.imageUrl"
            ></VSkeletonImage>
          </div>
          <div class="flex grow justify-between">
            <div>
              <div>{{ item.product.name }}</div>
              <div>${{ item.product.price }}</div>
            </div>
            <ProductCartManager :product="item.product"></ProductCartManager>
          </div>
        </VSkeleton>
      </div>
    </div>
    <div v-else>Cart is empty</div>
  </div>
</template>
