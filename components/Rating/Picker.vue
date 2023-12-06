<script lang="ts" setup>
const appConfig = useAppConfig()

type Props = {
  modelValue?: number
}
const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', payload: number): void
}>()

const steps = computed(() => getPercentSteps(appConfig.ratingSystem).reverse())
const value = computed(
  () => props.modelValue && getClosestStep(props.modelValue, steps.value),
)
</script>

<template>
  <HeadlessRadioGroup
    :model-value="value"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <HeadlessRadioGroupOption
      v-for="step in steps"
      :key="step"
      v-slot="{ checked }"
      :value="step"
    >
      <UIRadioItem :checked="checked">
        <div class="flex space-x-1">
          <RatingValue :value="step"></RatingValue>
          <span class="text-sm text-gray-500">& Up</span>
        </div>
      </UIRadioItem>
    </HeadlessRadioGroupOption>
  </HeadlessRadioGroup>
</template>
