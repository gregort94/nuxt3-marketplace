<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    throttleTime?: number
    thrasholdToBottom?: number
  }>(),
  {
    throttleTime: 500,
    thrasholdToBottom: 100,
  },
)
const emit = defineEmits<{
  (e: 'trigger'): void
}>()

const containerEl = ref<HTMLElement>()

const handleTrigger = useThrottleFn(() => {
  emit('trigger')
}, props.throttleTime)

const handleScroll = () => {
  if (
    containerEl.value &&
    containerEl.value?.getBoundingClientRect().bottom -
      props.thrasholdToBottom <
      window.innerHeight
  ) {
    handleTrigger()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div ref="containerEl">
    <slot />
  </div>
</template>
