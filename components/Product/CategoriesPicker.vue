<script lang="ts" setup>
const modelValue = defineModel<string[]>({ default: () => [] })

const { data: categories, pending } = await useCategories()
</script>

<template>
  <div>
    <div
      v-if="pending"
      class="space-y-2"
    >
      <VSkeleton
        v-for="item in 3"
        :key="item"
        loading
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
