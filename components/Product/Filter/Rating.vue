<script lang="ts" setup>
import { useRouteQuery } from '@vueuse/router'

const { ratingSystem } = useAppConfig()

const filters = useProductFilters()

const steps = computed(() =>
  Array.from({ length: ratingSystem })
    .map((item, idx) => idx + 1)
    .reverse(),
)
</script>

<template>
  <div class="flex flex-col space-y-1">
    <URadio
      v-for="value in steps"
      :key="value"
      :model-value="filters.rating || 1"
      :value="value"
      @update:model-value="filters.rating = $event"
    >
      <template #label>
        <div class="flex space-x-2">
          <RatingValueStars :value="value" />
          <div v-if="value !== ratingSystem">& Up</div>
        </div>
      </template>
    </URadio>
  </div>
</template>
