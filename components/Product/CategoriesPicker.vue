<script lang="ts" setup>
import type { Category } from '@prisma/client'

const modelValue = defineModel<string[]>({ default: () => [] })

const { data: categories, pending } = await useFetchOnce<Category[]>(
  '/api/categories',
  {
    lazy: true,
  },
)
</script>

<template>
  <div>
    <div
      v-if="pending"
      class="space-y-2"
    >
      <USkeleton
        v-for="item in 3"
        :key="item"
        class="h-3"
      />
    </div>
    <div v-if="categories">
      <UCheckbox
        v-for="category in categories"
        :id="category.id"
        :key="category.id"
        v-model="modelValue"
        :ui="{ inner: 'grow capitalize' }"
        :value="category.name"
        :label="category.name"
      />
    </div>
  </div>
</template>
