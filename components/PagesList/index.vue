<script lang="ts" setup>
interface PageItem {
  name: string
  link: string
}
const pagesList = ref<PageItem[]>([
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Some',
    link: '/some',
  },
])
</script>

<template>
  <div>
    <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
    <NuxtLink
      v-for="item in pagesList"
      :key="item.link"
      :to="item.link"
      class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
    >
      {{ item.name }}
    </NuxtLink>
  </div>
</template>
