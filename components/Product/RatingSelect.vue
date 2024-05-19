<script lang="ts" setup>
const modelValue = defineModel<number>({ default: 1 })

const { ratingSystem } = useAppConfig()

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
      v-model="modelValue"
      :value="value"
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
