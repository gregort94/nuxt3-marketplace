<script lang="ts" setup>
import { StarIcon } from '@heroicons/vue/24/outline'
const appConfig = useAppConfig()

type Props = {
  value: number
}
const props = defineProps<Props>()

const steps = computed(() => getPercentSteps(appConfig.ratingSystem))
const value = computed(
  () => props.value && getClosestStep(props.value, steps.value),
)
</script>

<template>
  <div class="flex w-[100px] space-x-1">
    <StarIcon
      v-for="step in steps"
      :key="step"
      class="aspect-square w-[16px]"
      :class="[step <= value ? 'text-yellow-500' : 'text-gray-500']"
    ></StarIcon>
  </div>
</template>
