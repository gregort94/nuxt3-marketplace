<script lang="ts" setup>
interface PageItem {
  name: string
  path: string
}
const pagesList = ref<PageItem[]>([
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Some',
    path: '/some',
  },
])

const route = useRoute()
</script>

<template>
  <div>
    <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
    <NuxtLink
      v-for="page in pagesList"
      :key="page.path"
      :to="page.path"
      :class="{
        'border-indigo-500 text-gray-900': route.fullPath === page.path,
        'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700':
          route.fullPath !== page.path,
      }"
      class="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
    >
      {{ page.name }}
    </NuxtLink>
  </div>
</template>
