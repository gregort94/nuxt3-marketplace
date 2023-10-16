<script lang="ts" setup>
const props = withDefaults(defineProps<{ throttleTime?: number }>(), {
  throttleTime: 500,
})
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
    containerEl.value?.getBoundingClientRect().bottom - 1 < window.innerHeight
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
    <slot></slot>
  </div>
</template>
