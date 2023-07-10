<script lang="ts" setup>
import type { NuxtLinkProps } from '#app'
import { UButton } from '#components'
type UButtonProps = Omit<
  InstanceType<typeof UButton>['$props'],
  'variant' | 'color'
>
const props = withDefaults(
  defineProps<NuxtLinkProps & { button?: UButtonProps }>(),
  // Hotfix for define props with optional boolean https://github.com/vuejs/core/issues/8576
  { prefetch: undefined, noPrefetch: undefined, button: undefined },
)

const route = useRoute()
const isActive = computed(() =>
  route.matched.some((route) => route.path === props.to),
)
</script>

<template>
  <NuxtLink v-bind="props">
    <UButton
      v-bind="props.button"
      variant="link"
      :color="isActive ? 'primary' : 'gray'"
    >
      <slot />
    </UButton>
  </NuxtLink>
</template>
